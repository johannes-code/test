const mainContent = document.getElementById("content")
const mainImage = document.getElementById("img")
const gallery = document.getElementById("gallery")
// const newImage = document.createElement("img")newImage.src="../img/kelly-sikkema-hSPVuakrJqs-unsplash.jpg"

// console.log(gallery)




const imageUrls = ["../img/geranimo-fpC5Jq7LLL8-unsplash.jpg",
    "../img/jeremy-bishop-8iTugPNZ_As-unsplash.jpg", 
    "../img/mattias-banguese-DTwn4h5HJ-U-unsplash.jpg", 
    "../img/roi-dimor-BHA9lIa48kY-unsplash.jpg", 
    "../img/sian-cooper-NEJcmvLFcws-unsplash.jpg",
    "../img/filip-mroz-0hJL8lBl0qQ-unsplash.jpg",
    "../img/marc-kleen-H02BVUa2IVY-unsplash.jpg",
    "../img/severin-demchuk-8Aks2rdGMNE-unsplash.jpg",
    "../img/cash-macanaya-sjPYbFnhzwY-unsplash.jpg",
    "../img/caleb-stokes-dWc5Gs4E2wA-unsplash.jpg",
    "../img/alexander-sinn-DlKvjpM2rZA-unsplash.jpg",
    "../img/aaron-burden-RgTI2KaQ5N4-unsplash.jpg",
    "../img/kelly-sikkema-hSPVuakrJqs-unsplash.jpg",
    "../img/wolfgang-hasselmann-8HG_YsmY8cU-unsplash.jpg"]
    
    // console.log(images.length)
    
    const randomNum = Math.floor(Math.random() * imageUrls.length)
    
    // console.log(images[randomNum])
    
    // mainContent.textContent = randomNum



    mainImage.src = (imageUrls[randomNum])
    
    imageUrls.forEach(url => {
        const newImg = document.createElement("img")
        newImg.src = url

        
        gallery.appendChild(newImg)
    })
