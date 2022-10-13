const selecao = document.querySelector("#cifraTipo");
const btn = document.querySelector("button");
const radiobtn = document.querySelector("#cifraCodDec");
const cod = document.querySelector("#cod");
const dec = document.querySelector("#dec");
const escMos = document.querySelector("#salto")

selecao.addEventListener("click", function(){
	if (selecao.value == "cifraCesar"){
		escMos.style.display = "block";
	} else {
		escMos.style.display = "none";
	}
})

function cifraCesar(){
	let msg = document.querySelector("#input").value;
	let salto = parseInt(document.querySelector("#rangenumber").value);
	let output = '';

	if (cod.checked){
		for (let i = 0; i < msg.length; i++){
			if(msg[i] === msg[i].toUpperCase()){
				output += String.fromCharCode((msg.charCodeAt(i) + salto - 65) % 26 + 65);
			} else {
				output += String.fromCharCode((msg.charCodeAt(i) + salto - 97) % 26 + 97);
			}
		}
		return output;

	} else if (dec.checked){
		for (let i = 0; i < msg.length; i++){
			if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122){
				output += String.fromCharCode((msg.charCodeAt(i) - 97 - salto + 26) % 26 + 97);
			} else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90){
				output += String.fromCharCode((msg.charCodeAt(i) - 65 - salto + 26) % 26 + 65);
			} else {
				output += String.fromCharCode(msg.charCodeAt(i));
			}
		}
		return output;
	}
}

function base64(){
	let msg = document.querySelector("#input").value;

	if (cod.checked){
		let cod = btoa(msg);
		return cod;
	} else if (dec.checked){
		let dec = atob(msg);
		return dec;
	}
}

radiobtn.addEventListener("click", function(){
	if (cod.checked){
		btn.innerHTML = "codificar mensagem";
	} else if (dec.checked){
		btn.innerHTML = "decodificar mensagem";
	}
});

btn.addEventListener("click", function(event){
	event.preventDefault();
	if (selecao.value === "base64"){
		output.innerText = base64();
	} else if (selecao.value === "cifraCesar"){
		output.innerText = cifraCesar();
	}
});