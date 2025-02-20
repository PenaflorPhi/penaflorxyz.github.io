// Function to load a file and insert it into the specified element
async function loadCode(filePath, elementId) {
    try {
        console.log(`Loading code from: ${filePath} into #${elementId}`);
        
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}: ${response.status} ${response.statusText}`);
        }

        const codeText = await response.text();
        
        // Insert the fetched code into the target HTML element
        document.getElementById(elementId).textContent = codeText;
        console.log(`Successfully loaded ${filePath}`);
    } catch (error) {
        console.error(`Error loading file ${filePath}:`, error);
        document.getElementById(elementId).textContent = "Error loading code.";
    }
}

// Load code snippets dynamically
document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM fully loaded. Starting to load code snippets...");

    await loadCode("../static/code_snippets/fib.py", "code-python");
    await loadCode("../static/code_snippets/fib.c", "code-c");

    console.log("All code snippets loaded.");
});
