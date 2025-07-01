<script>
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<header class="sticky top-0 h-[3.5em]">
    <div class="bg-orange-950 text-white absolute shadow-lg top-0 inset-x-0 ">
        <div class="container mx-auto flex justify-between flex-col md:flex-row items-stretch py-4 px-6">
            <div class="flex justify-between">
                <a href="/" class="header-link"><h2><i class="text-orange-600 text-opacity-50">the</i> Paywall Museum</h2></a>
                <button 
                    class="menu-button" 
                    on:click={toggleMenu}
                >
                    Menu
                </button>
            </div>
            <nav class={`menu-nav ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul class="menu-list">
                    <li><a href="/about" class="inline-block menu-link header-link">About</a></li>
                    <li><a href="/contact" class="inline-block menu-link header-link">Contribute</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<style>  
    @reference "tailwindcss";

    .menu-button {
        @apply md:hidden text-white focus:outline-none;
    }
    .menu-nav {
        @apply md:flex;
    }
    .menu-list {
        @apply flex flex-col md:flex-row text-end text-3xl space-y-4 mt-8 mb-4 md:space-y-0 md:my-0 md:space-x-6 md:text-base;
    }
    .header-link, .menu-button {
        @apply decoration-wavy hover:underline hover:text-orange-200 duration-300
            hover:-translate-y-[1px] transition-[text-decoration,_translate,_color]
            active:duration-0 active:translate-y-0;

    }
    .header-link h2 {
        @apply font-bold tracking-normal;
    }
</style>