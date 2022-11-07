fetch("https://gamertocoder.garena.co.th/api/minigames")
    .then((response) => {
        if (response.status !== 200) {
            return response.status;
        }
        return response.json();
    })
    .then((data) => {
        if (typeof data == "number") {
            alert(data);
        } else {
            for (let i = 0; i < data.length; i++) {

                const currentData = data[i];
                const newListItem = document.createElement("li");
                newListItem.classList.add("card", "btn1");
                newListItem.setAttribute("id", "open");
                newListItem.setAttribute("data-modal-target", "#modal");
                const genre_array = currentData.genre;
                let genre_string = genre_array[0];
                if (genre_array.length > 1) {
                    for (let j = 1; j < genre_array.length; j++) {
                        genre_string = genre_string + ", " + genre_array[j];
                    }
                }
                const html =
                    '<h1>' + currentData.name + '</h1>'
                    + '<img src="' + currentData.icon + '"width="160px"/>'
                    + '<h3>ประเภท: ' + genre_string + '</h3>'
                    + '<p> read more </p>'
                    + '<div class="modal">'
                    + '<div class="modal-header">'
                    + '<div class="title">' + currentData.name + '</div>'
                    + '</div>'
                    + '<div class="modal-body">'
                    + '<img src="' + currentData.icon + '"width="300px"/>'
                    + '<h2>ประเภท: ' + genre_string + '</h2>'
                    + '<p>' + currentData.description + '</p>'
                    
                    + '</div>'

                html.trim();
                newListItem.innerHTML = html;
                document.getElementById("list").appendChild(newListItem);
            }

        }

    }).then(() => {
        const openBtn = document.querySelectorAll('[data-modal-target]')
        const closeBtn = document.querySelectorAll("[data-modal-close]")
        const overlay = document.getElementById("overlay")



        openBtn.forEach((btn) => {
            const modal = btn.querySelector(".modal");
            btn.addEventListener('click', (() => {
                const modal_el = modal.outerHTML
                openModal(modal, modal_el)
            }))
        })

        closeBtn.forEach((btn) => {
            const modal = btn.closest(".modal")
            btn.addEventListener('click', (() => {
                closeModal(modal)
            }))
        })

        overlay.addEventListener('click', (() => {
            const modals = document.querySelectorAll('.modal.active')
            modals.forEach((modal) => {
                closeModal(modal)
            })
        }))

        //========================================================== // I add modal inside overlay    problem fixed!!! --tanawat 
        function openModal(modal, modal_el) {
            if (modal == undefined) return
            overlay.insertAdjacentHTML("beforeend", modal_el)// I add modal inside overlay
            overlay.querySelector(".modal").classList.add('active')
            overlay.classList.add('active')
        }

        function closeModal(modal) {
            if (modal == undefined) {
               
                overlay.classList.remove('active')
                return;
            }
            
            overlay.innerHTML = "" // I remove all innerHTML (modal)
            overlay.classList.remove('active')
            document.getElementById("hidden-section").style.display = "none";

        }
    })

//========================================================== 

