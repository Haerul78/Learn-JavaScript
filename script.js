// ========== LATIHAN ORIGINAL 1 ==========
let tampilan = document.getElementById('tampilan_1');

const menampilkan = () => {
    let nama = document.getElementById('name_1').value;

    if (nama.trim()) {
        tampilan.innerHTML = nama;
    }
}

// ========== LATIHAN 2 ORIGINAL ==========
let tampilan2 = document.getElementById('tampilan_2');

const menampilkan2 = () => {
    let nama = document.getElementById('name_2').value;
    let nomor = document.getElementById('nomor_2').value;
    let alamat = document.getElementById('alamat_2').value;
    let tampilan = document.getElementById('tampilan_2');
    
    const user = {
        name: nama,
        number: nomor,
        address: alamat
    };
    const message = `Halo ${user.name}. berikut adalah nomor anda (${user.number}). anda tinggal di ${user.address}.`;

    tampilan.innerHTML = message;
}

// ========== LATIHAN 3 ORIGINAL ==========
let originalUser = {
    name: 'John Doe',
    number: '081234567890',
    address: 'Jakarta',
    age: 25,
    status: 'Active'
};

const updateUser = () => {
    let newName = document.getElementById('name_3').value
    let newNumber = document.getElementById('nomor_3').value
    let newAddress = document.getElementById('alamat_3').value

    const updatedUser = {
        ...originalUser,
        ...(newName && {name: newName}),
        ...(newNumber && {number: newNumber}),
        ...(newAddress && {address: newAddress})
    }

    const tampilan3 = document.getElementById('tampilan_3');
    tampilan3.innerHTML = `
        <strong>Data Asli:</strong> ${JSON.stringify(originalUser, null, 2)}<br><br>
        <strong>Data Update:</strong> ${JSON.stringify(updatedUser, null, 2)}<br><br>
        <em>Lihat? Data asli tidak berubah, tapi kita punya data baru!</em>
    `;
}

// ========== LATIHAN 4 ORIGINAL ==========
const gabungData = () => {
    let hobby = document.getElementById('hobby').value;
    let job = document.getElementById('job').value;

    const personalData = { name: 'Jane', age: 23 };
    const contactData = { phone: '081111111111', email: 'jane@email.com' };
    const additionalData = {
        ...(hobby && {hobby}),
        ...(job && {job})
    };

    const completeUser = {
        ...personalData,
        ...contactData,
        ...additionalData
    };

    const tampilan4 = document.getElementById('tampilan_4');
    tampilan4.innerHTML = `
        <strong>Personal Data:</strong> ${JSON.stringify(personalData)}<br>
        <strong>Contact Data:</strong> ${JSON.stringify(contactData)}<br>
        <strong>Additional Data:</strong> ${JSON.stringify(additionalData)}<br><br>
        <strong>🎉 Data Lengkap:</strong> ${JSON.stringify(completeUser, null, 2)}
    `;
}

// ========== LATIHAN 5 ORIGINAL ==========
let itemList = ['Apel', 'Jeruk', 'Mangga'];

const tambahItem = () => {
    const newItem = document.getElementById('newItem').value;
    if (!newItem.trim()) return;

    itemList = [...itemList, newItem];

    updateItemDisplay();
    document.getElementById('newItem').value = '';
}

const resetList = () => {
    itemList = ['Apel', 'Jeruk', 'Mangga'];
    updateItemDisplay();
}

const updateItemDisplay = () => {
    const tampilan5 = document.getElementById('tampilan_5');
    tampilan5.innerHTML = `
        <strong>Daftar Item::</strong><br>
        ${itemList.map((item, index) => `${index + 1}. ${item}`).join('<br>')}
        <br><br>
        <strong>Total Item:</strong> ${itemList.length}
        ;
    `
}

updateItemDisplay();