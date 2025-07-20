
        document.getElementById('menu').addEventListener("click", async function () {


            await Swal.fire({
                html: `
    <br>
<div><button class="btn-column-sign pointer">Sign In</button></div>
<div> <button class="btn-column-white pointer">Get Started</button> </div>
<div><p class="btn-column-black pointer">About</p></div>
<div><p class="btn-column-black pointer">Blog</p></div>
<div><p class="btn-column-black pointer">Customers</p></div>
<div><p class="btn-column-black pointer">Resources</p></div>
<div><p class="btn-column-black pointer">Docs</p></div>
<div><p class="btn-column-black pointer">Pricing</p></div>
<div><p class="btn-column-black pointer">Contact</p></div>


                `,
                position: 'top',
                showClass: {
                    popup: `
          animate__animated
          animate__fadeInLeft
          animate__faster
        `,
                },
                hideClass: {
                    popup: `
          animate__animated
          animate__fadeOutLeft
          animate__faster
        `,
                },
                grow: 'row',
                background: '#000',
                showConfirmButton: false,
                showCloseButton: true,




            })

        })
