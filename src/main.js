document.addEventListener('DOMContentLoaded', function () {
    // Create scrollama instance
    const scroller = scrollama();

    function initScrollama() {
        scroller
            .setup({
                step: '.step',
                offset: 0.5,
                progress: true,
                debug: false
            })
            .onStepEnter(response => {
                // Global behavior for any step: mark the entered step active
                document.querySelectorAll('.step').forEach(el => {
                    el.classList.remove('is-active', 'active');
                });
                response.element.classList.add('is-active', 'active');
            })
            .onStepExit(response => {
                // Remove active classes from the exited step for cleanliness
                response.element.classList.remove('is-active', 'active');
            });
    }

    // Initialize
    initScrollama();

    // Handle resize
    window.addEventListener('resize', () => scroller.resize());
});