<script lang="ts" setup>
import logo from "~/assets/logo.svg";
</script>
 
<template>
	<footer
		data-aos="fade-up"
		data-aos-duration="1200"
		class="select-none z-40 px-10 relative flex justify-center items-center bg-no-repeat ltr:bg-right rtl:bg-left bg-opacity-5"
	>
		<section class="relative z-40 container mx-auto overflow-hidden">
			<ShapeLine class="opacity-50" />
			<section class="flex justify-center text-center md:text-start items-center py-5">
				<div class="text-center text-sm mr-3">
					<span class="text-2xl">&copy;</span>
					{{ $t('content.copyright') }} | {{ new Date().getFullYear() }}
				</div>
				<div>
					<a
						title="Discord"
						aria-label="Discord"
						class="w-10 transition flex justify-center items-center duration-300 dark:hover:fill-light_blue-50 hover:fill-dark_blue-900 fill-current"
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
				</div>
				<div>
					<a
						title="Twitter"
						aria-label="Twitter"
						class="w-10 col-span-1 transition flex justify-center items-center duration-300 dark:hover:fill-light_blue-50 hover:fill-dark_blue-900 fill-current"
						href="https://x.com/fewbit_net"
						target="_blank"
					>
						<svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
							<title>Twitter</title>
							<path
								xmlns="http://www.w3.org/2000/svg"
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
					</a>
				</div>
			</section>
		</section>
		<ShapeLogo
			class="z-0 fill-current opacity-20 md:w-[30vw] md:h-[30vw] w-[60vw] h-[60vw] absolute bottom-1/4 rtl:left-0 ltr:right-0"
		/>
	</footer>
</template>
 
<style scoped lang="scss">
.link {
	color: currentColor;
	text-decoration: underline solid #44aeffc9;
	text-decoration-color: #44aeffc9;
	text-decoration-skip-ink: none;
}

ul li {
	text-align: center;
}
</style>