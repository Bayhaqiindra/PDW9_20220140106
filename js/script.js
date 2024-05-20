document.getElementById("createButton").addEventListener("click", function(event) {
    event.preventDefault(); 

    const firstName = document.querySelector('input[name="fname"]').value;
    const lastName = document.querySelector('input[name="lname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const asal = document.querySelector('input[name="asal"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "";
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    const sourceOfIncome = document.querySelector('select[name="Sumber Pendapatan"]').value;
    const univ = document.querySelector('input[name="univ"]').value;
    const income = document.querySelector('input[name="income"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const bio = document.querySelector('textarea[name="bio"]').value;

    const outputContent = `
        <p>Nama Depan: ${firstName}</p>
        <p>Nama Belakang: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Asal: ${asal}</p>
        <p>No. Telepon: ${phone}</p>
        <p>Jenis Kelamin: ${gender}</p>
        <p>Hobi: ${Array.from(hobbies).map(hobby => hobby.value).join(", ")}</p>
        <p>Sumber Pendapatan: ${sourceOfIncome}</p>
        <p>Universitas: ${univ}</p>
        <p>Pendapatan: ${income}</p>
        <p>Umur: ${age}</p>
        <p>Bio: ${bio}</p>
    `;

    Swal.fire({
        title: "Detail Formulir",
        html: outputContent,
        icon: "success",
        confirmButtonText: "ASHIAPPP"
    });
});
