<script>
    // Get the current URL
    const currentUrl = window.location.href;

    // Get all nav links with the class 'nav-link'
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through each nav link
    navLinks.forEach(link => {
        // Check if the link's href matches the current URL
        if (link.href === currentUrl) {
            link.classList.add('active'); // Add the 'active' class to the current link
        }
    });
</script>
