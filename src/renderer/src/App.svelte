<script lang="ts">
    import Home from "./page/Home.svelte";
</script>

<main class:notWin11={!window.isWindows11}>
    <Home/>
</main>

<style lang="postcss">
    .notWin11{
        background-color: #333;
    }
</style>
