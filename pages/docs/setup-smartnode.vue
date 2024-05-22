<script lang="ts" setup>
import { useToast } from "vue-toastification";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import "prismjs/themes/prism-okaidia.min.css";

onMounted(() => {
	Prism.highlightAll();
});

const toast = useToast();
const { t } = useI18n();

const localePath = useLocalePath();

useHeadSafe({
	title: `Setup FewBit SmartNode - ${t("appName")}`,
	meta: [{ name: "description", content: "index page" }],
});

onNuxtReady(() => {
	// toast.info("Modified with ❤️ by Sumer Ahmed - [SUMER5020]", {
	//   timeout: 5000,
	//   position: "bottom-center"
	// });
});
</script>
 
<template>
	<HeaderDefault />

	<section class="container mx-auto pt-60 pb-40">
		<div class="mx-8 h-full flex flex-col justify-center items-center mb-20">
			<h1
				data-aos="fade-up"
				data-aos-duration="500"
				data-aos-delay="300"
				class="text-light_primary dark:text-dark_primary text-7xl mb-5"
			>Setup FewBit SmartNode</h1>
			<p>This guide uses Ubuntu 18.04/20.04 on a VPS.</p>
		</div>
		<section
			data-aos="fade-up"
			data-aos-duration="500"
			data-aos-delay="1200"
			class="container mx-auto pb-20"
		>
			<ol class="list-decimal">
				<li>
					Download and backup your wallet files (wallet.dat and dumpwallet) before sending any coins. Keep these backups offline and remember to do this before encrypting your wallet. Additionally, use
					<code
						class="lang-sh"
					>dumpprivkey "address"</code> to obtain the private key of a specific address. (optional)
				</li>
				<li>
					Create 3 new receiving addresses and label them
					<strong>collateralAddress</strong>,
					<strong>Owner/votingAddress</strong>,
					<strong>payoutAddress</strong>, or something along those lines to easily identify them.
				</li>
				<li>
					Send exact amount of collateral required to the collateral address. *15 confirmations is required before sending ProTx. Send at least 0.1 FBIT to the
					<strong>payoutAddress</strong> or the
					<strong>feeSourceAddress</strong>
				</li>
				<li>
					Get your collateral TxID and output index
					<pre><code class="lang-sh">
# ./fewbit-cli smartnode outputs
{
    "d90e1a6d9cc71fb3144fd6819a2f8406d286058586b0f7cf79cc2544a8b12345": "1"
}
// If no output was returned, then it means you didn't send collateral amount correctly.
					</code></pre>
				</li>
				<li>
					Generate a BLS key pair. You will need the secret key for the install script and public key to register the smartnode.
					<pre><code class="lang-sh">
# ./fewbit-cli bls generate
{
    "secret": "123451ec31d881f18156966989cd58503909130b4cd8ad01025af6c699026c08",
    "public": "90826fab8aff20d1812d8fcb7c5987c4fd59732b7f486fe684ea326cbf9c085af4e38cd41934ef4fcc0bfeaf10123456"
}
					</code></pre>
				</li>
				<li>
					Prepare ProRegTx transaction:
					<pre><code class="lang-sh">
# ./fewbit-cli protx register_prepare "collateralHash" collateralIndex "ipAndPort" "owner/votingAddress" "BLSpublicKey" "owner/votingAddress" operatorReward "payoutAddress" "feeSourceAddress"(optional)

"collateralHash": The collateral transaction hash from <strong>smartnode outputs</strong> (step 4)
"collateralIndex": The collateral transaction output index from <strong>smartnode outputs</strong> (step 4)
"ipAndPort": Enter the VPS IP address and port: 1155, ex: 64.176.58.32:1155
"BLSpublicKey": Enter BLS public key from <strong>bls generate</strong> (step 5)
"operatorReward": The fraction in % to share with the operator. The value must be between 0.00 and 100.00.

Result:
{                             (json object)
  "tx" :                      (string) The serialized unsigned ProTx in hex format.
  "collateralAddress" :       (string) The collateral address.
  "collateralAmount" :        6000
  "signMessage" :             (string) The string message that needs to be signed with
                              the collateral key.
}
					</code></pre>

					<div>
						Enter the following command, replacing each argument with your values. The
						<strong>feeSourceAddress</strong> is optional; if omitted, the
						<strong>payoutAddress</strong> will be used for the transaction fee. Ensure you have at least
						<span>0.1 FBIT</span> in either the
						<strong>payoutAddress</strong> or the
						<strong>feeSourceAddress</strong>, depending on which one you use for the fee.
					</div>
				</li>
				<li>
					Sign the ProRegTx transaction: replace arguments with your values from
					<code
						class="lang-sh"
					>protx register_prepare</code>
					<pre><code class="lang-sh">
# ./fewbit-cli signmessage "collateralAddress" "signMessage"

Result:
"signature"          (string) The signature of the message encoded in base 64
					</code></pre>
				</li>
				<li>
					Submit signed message
					<pre><code class="lang-sh">
# ./fewbit-cli protx register_submit tx signature

"tx": from <strong>protx register_prepare</strong> (step 6)
"signature": from <strong>signmessage</strong> (step 7)
					</code></pre>
				</li>
				<li>
					Update the configuration and restart the node
					<pre><code class="lang-sh">
// fewbit.conf
smartnodeblsprivkey="secret key from step 5"
					</code></pre>
				</li>
			</ol>
		</section>
	</section>
</template>