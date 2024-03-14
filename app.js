document.addEventListener('DOMContentLoaded', function () {
    // Example percentages (you can replace these with your actual percentages)
    const htmlProgress = 80;
    const cssProgress = 60;
    const jsProgress = 75;
    const reactProgress = 90;

    // Set progress values
    document.querySelector('.HTML .progress-line').style.width = `${htmlProgress}%`;
    document.querySelector('.css .progress-line').style.width = `${cssProgress}%`;
    document.querySelector('.Javascript .progress-line').style.width = `${jsProgress}%`;
    document.querySelector('.react .progress-line').style.width = `${reactProgress}%`;
});