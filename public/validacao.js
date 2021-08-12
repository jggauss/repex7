

//consulta cep e preenche automaticamente
const cep = document.querySelector("#cep");

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)) {
            document.querySelector("#"+campo).value = result[campo]
            console.log(result[campo])
        }
    }

}

cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: "GET",
        mode:'cors',
        cache:'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`)
    .then(response=> {response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu erro :'+ e, message))
    console.log(cep.value)
})



//valida cnpj//
function validarCNPJ(el){
    
    if( !_cnpj(el.value) ){
    alert("CNPJinválido!" + el.value);
    // apaga o valor
    el.value = "";
    }
    }

    function _cnpj(cnpj) {
        
        cnpj = cnpj.replace(/[^\d]+/g, '');
        if (cnpj == '') return false;
        if (cnpj.length != 14)
        return false;
        if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0, tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
        pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)) return false;
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
        pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
        return false;
        return true;
        }

//Mascara CNPJ//
function mascaraCnpj(mascara,input) {
	
	const vetMask = mascara.split("")
	const numCpf = input.value.replace(/\D/g,"")
	const cursor = Number(input.selectionStart)
	const tecla = (window.event) ? event.keyCode : event.which
	
	for(let i=0; i<numCpf.length; i++) {
		vetMask.splice(vetMask.indexOf("#"), 1, numCpf[i])
	}
	input.value = vetMask.join("")

	if(tecla != 37 && (cursor == 3 || cursor ==7 || cursor==9 || cursor==14)) {
		
		input.setSelectionRange(cursor+1,cursor+1)
	} else {
		input.setSelectionRange(cursor,cursor)
	}
	console.log(input.value)	
	var exemplo=(input.value)
}

//Mascara TELFEFONE//
function mascaraTelefone(mascara,input) {
	
	const vetMask = mascara.split("")
	const numCpf = input.value.replace(/\D/g,"")
	const cursor = Number(input.selectionStart)
	const tecla = (window.event) ? event.keyCode : event.which
	
	for(let i=0; i<numCpf.length; i++) {
		vetMask.splice(vetMask.indexOf("#"), 1, numCpf[i])
        
	}
	input.value = vetMask.join("")
    console.log(cursor)
	console.log(input.value)
    
	if(tecla != 37 && (cursor == 1 ||cursor == 3|| cursor == 4|| cursor == 5|| cursor== 9 )) {
		
		input.setSelectionRange(cursor+1,cursor+1)
	} else {
		input.setSelectionRange(cursor,cursor)
	}
    	
	
}

//valor para Real

function formatarMoeda() {
    var elemento = document.getElementById('valor');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
}

