https://stackoverflow.com/questions/62500913/adding-a-dropdown-menu-to-my-navigation-bar-moved-that-child-to-the-right/62501522#62501522

When I tried to add a dropdown menu to my navigation bar it sent that child to the right of the navigation bar. I want it to be the 3rd child. How can I fix that? I tried to make it an absolute to keep its place however, it will then place itself over another child. I do not want that.

Here is my HTML

  <div>
    <a href="#home" class="logo">LOGO</a>
    <div class="w3-right smallScreen">
        <a href="index.html" class="rightNav">HOME</a>
        <a href="director.html#slider-image-1" class="rightNav">DIRECTOR OF BANDS</a>
        <div  class="dropdown">
        <a href="#contact" class="rightNav dropdown dropbtn">MARCHING BAND</a>
          <div class="dropdown-content">
              <a href="#">MARCHING BAND</a>
              <a href="#">STAFF</a>
              <a href="#">MUSIC</a>
              </div>
            </div>
        <a href="#contact" class="rightNav">CONCERT BAND</a>
        <a href="#contact" class="rightNav">JAZZ BAND</a>
        <a href="#contact" class="rightNav">CLASSES</a>
        <a href="#contact" class="rightNav">MEDIA</a>
        <a href="#contact" class="rightNav">CONTACT US</a>
    </div>

And this is my CSS

    float: left;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    background: white;
    }

    .rightNav:hover{
        color: #0067ff;
        transition-duration: .4s;
    }

    .bar {
        background-color: white;
    }

    .dropdown {
        display: inline-block;
    }

    .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }

    .dropdown-content a {
    color: black;
    padding: 15px;
    text-decoration: none;
    display: block;
        font-size: 17px;
    }

    .dropdown-content a:hover {
        background-color: #ebebeb;
        transition: .1s;
    }

    .dropdown:hover .dropdown-content {
    display: block;
    }