
function createList(){
    let lista = $('#lista')
    lista.empty()
    $.get('http://localhost:5000/amigos', response => {
        for(let i=0; i<response.length; i++){
            let li = `<li>${response[i].name}</li>`
            lista.append(li)
        }
    })   
}


$('#boton').click( () => {
     createList()
})

//////////////////////////////////////////////////////////////////////////

// let friends = []
// let usos = 0

// function createList(friends){
    //     let list = document.querySelector('#lista')
    //     for(let i=0; i<friends.length; i++){
        //         let li = document.createElement('li')
        //         let liText = document.createTextNode(friends[i])
        //         li.appendChild(liText)
        //         list.appendChild(li)
        //     }
        // }
        
        // $('#boton')[0].addEventListener('click', e => {
//     if(usos === 0){
    //         $.get('http://localhost:5000/amigos',response => {
        //             console.log(response)
        //             for(let i=0; i<response.length; i++){
            //                 friends.push(response[i].name)
            //             }
            //             createList(friends)
            //             // console.log(friends)
            //             usos ++
            //         })
            //     }
            // })
            
            
//////////////////////////////////////////////////////////////////////////

$('#search').click( () => {
    $.get(`http://localhost:5000/amigos/${$('#input').val()}`, response => {
        console.log(response)
        let amigo = $('#amigo')
        amigo.text(' '+response.name)
    })
    $('input').val('')
})
         
// $('#search')[0].addEventListener('click', e => {
//     $.get('http://localhost:5000/amigos/'+ $('input').val(), response => {
//         let amigo = document.querySelector('#amigo') 
//         amigo.textContent = response.name
//         $('input').val('')
//     })
// })


///////////////////////////////////////////////////////////////////////////


$('#delete').click(() => {
    let input = $('#inputDelete').val()
    $.ajax({
        url: `http://localhost:5000/amigos/${input}`,
        type: 'DELETE',
        success: response => {
            console.log('hola')
            $('#success').text('Tu amigo borrado fue borrado con exito')
        }
    })
    $('input').val('')
    createList()

})


// $('#delete')[0].addEventListener('click', e => {
//     $.ajax({
//         url: 'http://localhost:5000/amigos/'+ $('inputDelete').val(),
//         type: 'DELETE',
//         success: function(response) {
//             response.splice($('inputDelete').val()-1,$('inputDelete').val())
//             console.log(response)
//         }
//     });
// })
