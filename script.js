// Seleciona todos os inputs de rádio
const courseOptions = document.querySelectorAll('input[name="course"]');

courseOptions.forEach(option => {
    option.addEventListener('change', (e) => {
        const selectedCourse = e.target.value;
        console.log("Curso selecionado:", selectedCourse);
        
        // Aqui você poderia atualizar um total ou habilitar um botão de compra
    });
});
