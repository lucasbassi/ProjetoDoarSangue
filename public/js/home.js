function habilita_survey(){
    document.getElementById("balao_questionario").style.display = "none";
    document.getElementById("executar_questionario").style.display = "block";
    document.getElementById("button_informacao").style.display = "none";
    document.getElementById("img_questionario").style.display = "none";
    document.getElementById("img_questionario").style.opacity = "1";
    document.getElementById('balao_questionario').style.display = "none";
    document.getElementById("legenda").style.display = "none";
}

function close_modal(){
    document.getElementById("button_informacao").style.display = "block";
    document.getElementById("img_questionario").style.display = "block";
    document.getElementById("balao_questionario").style.display = "block";
    document.getElementById("legenda").style.display = "block";
}
    


function fechar_balao(){
    document.getElementById('balao_questionario').style.display = 'none';
}
function aparecer_texto(){
    document.getElementById('balao').style.opacity = "1";
    document.getElementById('balao').style.visibility = "visible";
}
function reset(){
    document.getElementById('balao').style.opacity = "0";
    document.getElementById('balao').style.visibility = "hidden";
} 

/* Função para fechar o modal principal de escolher o tipo sanguineo */
function close_escolha(){
    document.getElementById("myModal").aria-hidden.true;
}

// FECHA O MODAL DE INFO LOCAL NO [X]
function fechaLocal () {
    document.getElementById("mostraLocal").style.display = "none";
    document.getElementById("button_informacao").style.display = "block";
    document.getElementById("img_questionario").style.display = "block";
    document.getElementById("balao_questionario").style.display = "block";
    document.getElementById("legenda").style.display = "block";
    }
    $(document).click(function(e) {
        if (!$(e.target).is('.panel-body')) {
            $('.collapse').collapse('hide');	    
        }
    });
    
function aciona() {
    document.getElementById("overlay").style.display = "block";
    $('.collapse').collapse('show')

}
function desativa() {
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("button_informacao").style.display = "block";
    document.getElementById("legenda").style.display = "block";
    document.getElementById("executar_questionario").style.display = "block";
}

function close_localizacao(){
    document.getElementById("modal_localizacao").style.opacity = "0";
    document.getElementById("modal_localizacao").style.visibility = "hidden";
    document.getElementById("container_selecione").style.opacity = "1";
    document.getElementById("container_selecione").style.visibility = "visible";
}
