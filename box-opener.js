function simulateMouseEvent(target, eventType) {
    const mouseEvent = new MouseEvent(eventType, {
        view: window,
        bubbles: true,
        cancelable: true
    });
    target.dispatchEvent(mouseEvent);
}

function clickAtCenterOfViewport() {
    // Get center coordinates
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    // Get the element at the center of the viewport
    const centerElement = document.elementFromPoint(centerX, centerY);

    // Only proceed if we have a center element to interact with
    if (centerElement) {
        try {
            // Simulate a more realistic click with potential for other event types
            simulateMouseEvent(centerElement, 'mousedown');
            simulateMouseEvent(centerElement, 'mouseup');
            simulateMouseEvent(centerElement, 'click');
            console.log('Clicked at center of viewport:', centerElement);
        } catch (error) {
            console.error('Error clicking at center:', error);
        }
    } else {
        console.warn('No element found at the center of the viewport to click.');
    }
}

function openBox() {
    try {
        const buttonElement = document.querySelector('[class*="shinyButton_"]');
        if (buttonElement) {
            simulateMouseEvent(buttonElement, 'click');
            console.log('Box-opening button clicked.');
        } else {
            console.warn('Box-opening button not found.');
        }
    } catch (error) {
        console.error('Error clicking the box-opening button:', error);
    }
}

function initiateBoxOpeningSequence() {
    // Delay the box opening to ensure any animations or state changes have been processed
    setTimeout(() => {
        openBox();
    }, 100); // Adjust this timeout as necessary
    clickAtCenterOfViewport();
}

setInterval(initiateBoxOpeningSequence, 5050);
