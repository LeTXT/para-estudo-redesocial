//modal da mensagem
function iniciaModal (modalID) {
const modalm = document.getElementById(modalID)
if (modalm) {
    modalm.classList.add('abrir')
   modalm.addEventListener('click', function(e){
        if (e.target.id == modalID || e.target.className == 'fecharm') {
            modalm.classList.remove('abrir')
            console.log(e.target)
        }
        
    })
}
}
const mens = document.querySelector ('.mens')
mens.addEventListener('click', function() {
    iniciaModal ('modal-mensagem')
})

//modal compartilhar
function iniciaModalc (modalIDm) {
    const modalc = document.getElementById(modalIDm)
    if (modalc) {
        modalc.classList.add('abrirm')
       modalc.addEventListener('click', function(ec){
            if (ec.target.id == modalIDm || ec.target.className == 'fecharc') {
                modalc.classList.remove('abrirm')
                
            }
            
        })
    }
    }
    const comp = document.querySelector ('.comp')
    comp.addEventListener('click', function() {
        iniciaModalc ('modal-compartilha')
    })