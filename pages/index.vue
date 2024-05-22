<script lang="ts" setup>
import rectangles from "~/assets/rectangles.svg";
import { useToast } from "vue-toastification";
import Soon from "~/components/Coming/Soon.vue";
const toast = useToast();
const { t } = useI18n();

const localePath = useLocalePath();

useHeadSafe({
	title: `${t("appName")} - ${t("title.home")}`,
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
	<section class="container mx-auto pt-60 pb-40"
				:style="{ backgroundImage: `url(${rectangles})` }">
		<div class="mx-8 h-full flex flex-col justify-center items-center">
			<img src="~/assets/fewbit.svg" width="320" class="mb-5" />
			<p
				data-aos="fade-up"
				data-aos-duration="500"
				data-aos-delay="600"
				class="text-blue-500 dark:text-blue-400 text-2xl text-center mb-8"
			>{{ $t('content.tempDesc') }}</p>
			<p class="flex items-center text-dark_primary mb-2">
				<div>join with us on Discord</div>
				<a
					title="Discord"
					aria-label="Discord"
					class="w-10 col-span-1 transition flex justify-center items-center duration-300 dark:hover:fill-light_blue-50 hover:fill-dark_blue-900 fill-current"
					href="https://discord.com/invite/BCjYR8cbuQ"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						fill="currentColor"
						class="bi bi-github"
						viewBox="0 0 16 16"
					>
						<path
							d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"
						/>
					</svg>
				</a>
			</p>
		</div>
	</section>
	<section
		data-aos="fade-up"
		data-aos-duration="500"
		data-aos-delay="1200"
		class="container mx-auto pb-20"
	>
		<div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14">
			<div class="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
				<div class="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
					<div
						class="w-12 h-12 bg-orange-500 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500"
					>
						<svg
							class="w-8 h-8 text-red-500"
							viewBox="0 0 24 24"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<rect id="bound" x="0" y="0" width="24" height="24" />
								<path
									d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z"
									id="Combined-Shape"
									fill="white"
									opacity="0.3"
								/>
								<circle id="Oval-14" fill="white" cx="12" cy="9" r="5" />
							</g>
						</svg>
					</div>
					<h4 class="text-2xl mt-6">Tokenomics</h4>
					<p
						class="text-base text-slate-400 leading-7 mt-2"
					>FewBit is a cryptocurrency designed with specific parameters to ensure efficient and fair distribution. It has a total supply of 210,000,000 FBIT, with a smartnode collateral requirement of 6,000 FBIT. The block time is approximately 150 seconds, providing a steady pace for transaction confirmations.</p>
					<p
						class="text-base text-slate-400 leading-7 mt-2"
					>Each block reward is 50 FBIT, distributed with 5% going to the developers, 65% to smartnodes, and 35% to miners. Notably, if the smartnodes are not yet activated, miners receive a significantly higher reward of 95%. FewBit utilizes the GhostRider algorithm, which enhances its security and operational efficiency, making it a promising digital currency in the crypto space.</p>


					<h4 class="text-2xl mt-6">Download Wallet</h4>
					<p
						class="text-base text-slate-400 leading-7 mt-2">
					
				<a
					title="Discord"
					aria-label="Discord"
					class="text-orange-500 dark:hover:text-light_blue-50 hover:text-dark_blue-900 flex justify-start items-center"
					href="https://github.com/FewBit-Coin/Core-Wallet/releases"
					target="_blank"
				><svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						fill="currentColor"
						class="bi bi-discord mr-2"
						viewBox="0 0 16 16"
					>
						<path
							d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"
						/>
					</svg>
					 FewBit Lastest Release </a>
					</p>
					
					<h4 class="text-2xl mt-6">Pools list</h4>
					<p class="flex text-base text-slate-400 leading-7 mt-2">
						<a
						class="text-orange-500 dark:hover:text-light_blue-50 hover:text-dark_blue-900 flex justify-start items-center mr-3"
						href="https://2realminers.com/#fewbit"
						target="_blank" nofollow>2RealMiners</a>
						<a
						class="text-orange-500 dark:hover:text-light_blue-50 hover:text-dark_blue-900 flex justify-start items-center mr-3"
						href="http://epool.uk/#fbit1"
						target="_blank" nofollow>EPool</a>
						<a
						class="text-orange-500 dark:hover:text-light_blue-50 hover:text-dark_blue-900 flex justify-start items-center"
						href="https://pool.rplant.xyz/#fewbit"
						target="_blank" nofollow>RPlant</a>
					</p>

					<h4 class="text-2xl mt-6">How to mine FBIT by language</h4>
					<p class="text-base text-slate-400 leading-7 mt-2">
						<div class="flex mb-3">
							<a title="How to mine FBIT in English"
							aria-label="How to mine FBIT in English"
							class="text-orange-500 dark:hover:text-light_blue-50 hover:text-dark_blue-900 flex justify-start items-center mr-3"
							href="https://www.youtube.com/watch?v=-Cuo8LOz_Cc"
							target="_blank" nofollow>English</a>
							<a title="How to mine FBIT in Chinese"
							aria-label="How to mine FBIT in Chinese"
							class="text-orange-500 dark:hover:text-light_blue-50 hover:text-dark_blue-900 flex justify-start items-center mr-3"
							href="https://www.youtube.com/watch?v=ndWnjJmGwwg"
							target="_blank" nofollow>Chinese</a>
							<a title="How to mine FBIT in Russian"
							aria-label="How to mine FBIT in Russian"
							class="text-orange-500 dark:hover:text-light_blue-50 hover:text-dark_blue-900 flex justify-start items-center mr-3"
							href="https://www.youtube.com/watch?v=xumRTxJvaDU"
							target="_blank" nofollow>Russian</a>
							<a title="How to mine FBIT in Russian"
							aria-label="How to mine FBIT in Russian"
							class="text-orange-500 dark:hover:text-light_blue-50 hover:text-dark_blue-900 flex justify-start items-center"
							href="https://youtu.be/AeN-9iTUqBI"
							target="_blank" nofollow>Spanish</a>
						</div>
						<code lang="js">Thank you for your contributions! ❤️</code>
					</p>
				</div>
			</div>

			<div class="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
				<div class="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
					<div
						class="w-12 h-12 bg-orange-500 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500"
					>
						<svg
							class="w-8 h-8 text-red-500"
							viewBox="0 0 24 24"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<rect id="bound" x="0" y="0" width="24" height="24" />
								<path
									d="M6,9 L6,15 C6,16.6568542 7.34314575,18 9,18 L15,18 L15,18.8181818 C15,20.2324881 14.2324881,21 12.8181818,21 L5.18181818,21 C3.76751186,21 3,20.2324881 3,18.8181818 L3,11.1818182 C3,9.76751186 3.76751186,9 5.18181818,9 L6,9 Z"
									id="Combined-Shape"
									fill="white"
								/>
								<path
									d="M10.1818182,4 L17.8181818,4 C19.2324881,4 20,4.76751186 20,6.18181818 L20,13.8181818 C20,15.2324881 19.2324881,16 17.8181818,16 L10.1818182,16 C8.76751186,16 8,15.2324881 8,13.8181818 L8,6.18181818 C8,4.76751186 8.76751186,4 10.1818182,4 Z"
									id="Rectangle-19-Copy-3"
									fill="white"
									opacity="0.3"
								/>
							</g>
						</svg>
					</div>
					<h4 class="text-2xl mt-6">Smartnodes</h4>
					<p class="text-base text-slate-400 leading-7 mt-2">When smartnodes are activated, miners only receive 35% of the rewards. With a sufficiently large number of smartnodes, FewBit will stabilize in balancing the rewards between smartnodes and miners. This equilibrium ensures that the network remains secure and efficient, as the incentives are properly aligned for both parties.</p>
					<p class="text-base text-slate-400 leading-7 mt-2 mb-5">Smartnodes play a crucial role in the network by performing essential tasks and services, while miners continue to secure the blockchain through their computational efforts. As the number of smartnodes increases, the reward distribution mechanism ensures that both smartnodes and miners are adequately compensated, fostering a sustainable and balanced ecosystem within FewBit.</p>
					<p class="text-base text-slate-400 leading-7 mt-2 mb-5">
						
						<table class="w-full mb-5">
							<caption class="caption-top">
								The collateral needed to create a SmartNode on the blockchain is established as follows:</caption>
							<thead>
								<tr>
									<th>Up to block</th>
									<th class="text-right">Collateral</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>88,720</td>
									<td class="text-right">6,000 FBIT</td>
								</tr>
								<tr>
									<td>132,720</td>
									<td class="text-right">8,000 FBIT</td>
								</tr>
								<tr>
									<td>176,720</td>
									<td class="text-right">10,000 FBIT</td>
								</tr>
								<tr>
									<td>220,720</td>
									<td class="text-right">12,500 FBIT</td>
								</tr>
								<tr>
									<td>264,720</td>
									<td class="text-right">15,000 FBIT</td>
								</tr>
								<tr>
									<td>264.720+</td>
									<td class="text-right">18,000 FBIT</td>
								</tr>
							</tbody>
						</table>
					</p>
					<p>
						<NuxtLink class="text-orange-500 dark:hover:text-light_blue-50 hover:text-dark_blue-900 flex justify-start items-center" :to="localePath('/docs/setup-smartnode')">
							<span>Setup Smartnode</span>
							<Icon name="MdiArrowTopRight" class="w-4 h-4 rtl:-rotate-90" />
						</NuxtLink>
					</p>
				</div>
			</div>

			<div class="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
				<div class="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
					<div
						class="w-12 h-12 bg-orange-500 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500"
					>
						<svg
							class="w-8 h-8 text-red-500"
							viewBox="0 0 24 24"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<polygon id="Shape" points="0 0 24 0 24 24 0 24" />
								<path
									d="M6,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,17 C21,18.6568542 19.6568542,20 18,20 L6,20 C4.34314575,20 3,18.6568542 3,17 L3,8 C3,6.34314575 4.34314575,5 6,5 Z M5,17 L14,17 L9.5,11 L5,17 Z M16,14 C17.6568542,14 19,12.6568542 19,11 C19,9.34314575 17.6568542,8 16,8 C14.3431458,8 13,9.34314575 13,11 C13,12.6568542 14.3431458,14 16,14 Z"
									id="Rectangle-25"
									fill="white"
								/>
							</g>
						</svg>
					</div>
					<h4 class="text-2xl mt-6">Staking System</h4>
					<p
						class="text-base text-slate-400 leading-7 mt-2"
					>The coin staking system secures and maintains the blockchain network while increasing coin stability and value. By locking coins for staking, the circulating supply decreases, reducing selling pressure and potentially raising prices. This minimizes volatility, creating price stability.</p>
					<p
						class="text-base text-slate-400 leading-7 mt-2"
					>Staking rewards incentivize long-term holding, fostering loyalty and commitment. Staking participants often gain voting rights in network governance, promoting a sustainable ecosystem based on community consensus.</p>
					<p
						class="text-base text-slate-400 leading-7 mt-2"
					>Additionally, the staking system optimizes resource usage and enhances network performance, making the coin more attractive to investors and new users, fostering stable, sustainable development.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="container mx-auto pb-20">
		<div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14">
			<div class="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
				<div class="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
					<h3 class="text-light_primary dark:text-dark_primary text-3xl mb-1">Exchanges</h3>
					<p class="mb-5">Voting... Funding - Listing</p>
					<Soon esttime="June, 2024" />
				</div>
			</div>
			<div class="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
				<div class="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
					<h3 class="text-light_primary dark:text-dark_primary text-3xl mb-1"
					>FewBit WebApp Wallet</h3>
					<p class="mb-5">Serves sending/receiving/staking/airdroping FBIT coin</p>
					<Soon esttime="July, 2024" />
				</div>
			</div>
			<div class="group aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
				<div class="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
					<h3 class="text-light_primary dark:text-dark_primary text-3xl mb-1"
					>FewNode - Staking System</h3>
					<p class="mb-5">Simple - Fast - Effective</p>
					<Soon esttime="September, 2024" />
				</div>
			</div>
		</div>
	</section>

	<section class="container mx-auto pb-20">
		<div class="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
			<h3 class="text-light_primary dark:text-dark_primary text-3xl mb-1">Enhancing GhostRider</h3>

			<p class="mb-3">Building upon the innovative groundwork laid by Raptoreum, FewBit is poised to broaden its horizons, venturing into dynamic sectors such as GameFi and Ecommerce. From the very beginning, we have upheld a commitment to decentralization by refraining from pre-mining FBIT. This principle underscores our dedication to a governance model driven by the community. To sustain our development efforts, 5% of each mined block is allocated to the FewBit team, ensuring continuous growth and innovation.</p>
			<p class="mb-3">
				Developer's Address: 
				<NuxtLink class="text-orange-500 dark:hover:text-light_blue-50 hover:text-dark_blue-900" to="https://explorer.fewbit.net/address/FJ4QNkE7p9mWvEYKAc9zNNRxk6vkaNMuUu" target="_blank">FJ4QNkE7p9mWvEYKAc9zNNRxk6vkaNMuUu</NuxtLink>
			</p>

			<p class="mb-3">Valuable information, created by the community and thoroughly reviewed, will be officially posted on our website at https://fewbit.net. Therefore, don't hesitate to share with a constructive spirit and reach out to us.</p>
		</div>
	</section>
</template>
<style scoped lang="scss"></style>