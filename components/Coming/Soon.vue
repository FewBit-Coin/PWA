<script lang="ts" setup>
/*using nuxt-icons as component*/
const props = withDefaults(
	defineProps<{
		esttime?: string;
		content?: string;
	}>(),
	{ content: "Under Construction" }
);
</script>

<template>
	<div class="dir-ltr">
		<pre
			class="bg-light_blue-50/95 dark:bg-dark_blue-900/95 p-8 flex flex-col w-full shadow-xl rounded-xl"
		>
            <code v-html="content"></code>
            <p v-if="esttime">Est: <span class="nuxt-icon" v-html="esttime" /></p>
        </pre>
	</div>
</template>

<style scoped lang="scss"></style>
