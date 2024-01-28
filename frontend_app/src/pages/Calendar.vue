<template>
    <div>
        <div class="top">
            <img 
                src="https://images.theconversation.com/files/513157/original/file-20230302-28-r91z9l.jpg?ixlib=rb-1.1.0&rect=10%2C0%2C6699%2C4466&q=45&auto=format&w=926&fit=clip" />
        </div>
        <div class="header1">

            <p>Events and Reminders</p>

        </div>

        <div class="row">

            <div class="col-6">
                <p class="sub-header-left"> Upcoming ... </p>

                <p class="point">TESTING</p>
            </div>

            <div class="col-6">
                <button class="sub-header-right" v-on:click="popup">Add Event or Reminder</button>

                <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%237986CB&ctz=America%2FLos_Angeles&showTitle=0&showPrint=0&src=Y2NlbGlzZWouMDRAZ21haWwuY29t&color=%23039BE5"
                    style="border:solid 4px rgb(71, 62, 240)" width="80%" height="300" frameborder="0"
                    scrolling="no"></iframe>
            </div>


        </div>

        <div>
            <div class="points">

            </div>
        </div>



    </div>
</template>

<script setup>
</script>

<script >
import Swal from 'sweetalert2';


function popup() {

    // })
    Swal.fire({
        title: "In the following order: enter title, start time, end time, and reoccurence",
        html: `
    <input id="swal-input1" class="swal2-input">
    <input id="swal-input3" class="swal2-input">
    <input id="swal-input4" class="swal2-input">
    <input id="swal-input2" class="swal2-input">
  `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-input3").value,
                document.getElementById("swal-input4").value
            ];
        }
    }).then(res => {
        if (res.values) {
            Swal.fire(JSON.stringify(formValues));
        }
    })

}

</script>
 

<style>
.top {
    position: absolute;
    top: 0;
    overflow: hidden;
    max-height: 200px;
    width: 100%;
    display: grid;
    z-index: 0;
    place-content: center;


}

.top img {
    width: 100vw;
}
.header1 {
    position: relative;
    z-index: 10;
    text-align: center;
    font-size: 35px;
    margin-bottom: 30px;
    margin-top:130px;
}

.sub-header-left {
    text-align: left;
    font-size: 30px;
    margin-top: 0;


}

.sub-header-right {

    font-size: 20px;
    margin-top: 0;
    width: 80%;
    margin-bottom: 20px;


}

.right {
    text-align: right;
}

.point {
    width: 350px;
    height: 450px;
    border: 8px solid rgb(71, 62, 240);
}
</style>
