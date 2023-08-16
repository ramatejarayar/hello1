function addUser()
{
    input_name = document.getElementById("input_name").value;

    localStorage.setItem("input_name" , input_name)

    window.location = "kwitter_room.html"
}