document.addEventListener("DOMContentLoaded", () => {
  let btnOpenModal = document.getElementById("openModal");
  btnOpenModal.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('11111111111111111111111111111111111111111111111');
    let typeBuild = document.getElementsByClassName('choices1')[0].value;
    let distFromKAD = document.getElementsByClassName('choices2')[0].value;
    let periodRent = document.getElementById("amount").value;
    let qtyBuild = document.getElementById("amount2").value;
    console.log('typeBuild', typeBuild);
    console.log('distFromKAD', distFromKAD);
    console.log('periodRent', periodRent);
    console.log('qtyBuild', qtyBuild);

    document.getElementById('inputType').value = typeBuild;
    document.getElementById('inputDist').value = distFromKAD;
    document.getElementById('inputRent').value = periodRent;
    document.getElementById('inputQty').value = qtyBuild;
    // let typeBuildModal =
    // let distFromKADModal =
    // let periodRentModal =
    // let qtyBuildModal =
  }
  )


})