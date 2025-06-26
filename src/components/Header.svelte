<script>
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<header class="bg-orange-950 text-white sticky top-0">
    <div class="container mx-auto flex justify-between items-stretch flex-col md:flex-row items-center py-4 px-6">
        <div class="flex justify-between">
            <a href="/" class="header-link"><h1 class="font-bold">Paywall Museum</h1></a>
            <button 
                class="menu-button" 
                on:click={toggleMenu}
            >
                Menu
            </button>
        </div>
        <nav class={`menu-nav ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul class="menu-list">
                <li><a href="/about" class="menu-link header-link">About</a></li>
                <li><a href="/contact" class="menu-link header-link">Contribute</a></li>
            </ul>
        </nav>
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
        @apply flex flex-col md:flex-row text-end space-y-4 mt-8 mb-4 md:space-y-0 md:my-0 md:space-x-4;
    }
    .header-link {
        @apply decoration-wavy hover:underline hover:text-orange-200;
    }
</style>