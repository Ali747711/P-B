console.log("Signup frontend javascript file");


  $(function () {
    const fileTarget = $(".file-box .upload-hidden");
    let filename;
    fileTarget.on("change", function () {
    if (window.FileReader) {
        const uploadFile = $(this)[0].files[0],
           fileType = uploadFile["type"],
           validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
        if (!validImageTypes.includes(fileType)) {
            alert("Please insert onlye jpeg,jpg!")
        } else{ 
            if(uploadFile){

                console.log(URL.createObjectURL(uploadFile));
                $(".upload-img-frame").attr("src", URL.createObjectURL(uploadFile))
                .addClass("succes");

        }
        filename = $(this)[0].files[0].name;
     }
     $(this).siblings(".upload-name").val(filename);
    }
          
  });

});
  
function validateSignupForm() {
    const memberNick = $(".member-nick").val(), //member-nick
     memberPhone = $(".member-phone").val(),
     memberPassword = $(".member-password").val(),
     confirmPassword = $(".confirm-password").val(); 
    

    if(memberNick =="" ||
         memberPhone=="" ||
         memberPassword=="" || 
         confirmPassword==="" ) {
            alert("Please insert all required inputs!");
            return false;

         }

         if(memberPassword !== confirmPassword) {
            alert("Passwords do not match, please check!");
            return false;
         


         }
         const memberImage = $(".member-image").get(0).files[0].name
         ? $(".member-image").get(0).files[0].name
         :null;
         if(!memberImage) {
            alert("Please insert restaurant image!");
            return false;
         }
         
};