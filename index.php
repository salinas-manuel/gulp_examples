<DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Bootstrap Demo</title>

    <?php $cssFiles = scandir("dist/css", SCANDIR_SORT_DESCENDING); ?>
    <link rel="stylesheet" type="text/css" href="dist/css/<?php echo $cssFiles[0]; ?>">

  </head>

  <body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <div class="container">

       <a class="navbar-brand" href="/">My Website</a>

       <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>

       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav ml-auto">
           <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
           <li class="nav-item"><a class="nav-link" href="/resume.php">Resume</a></li>
           <li class="nav-item"><a class="nav-link" href="/contact.php">Contact</a></li>

           <li class="nav-item dropdown">
             <a
              class="nav-link dropdown-toggle"
              href="#"
              data-toggle="dropdown"
              id="dropdown01">Stuff</a>

              <div class="dropdown-menu"
               aria-labelledby="dropdown01"
               >

               <a class="dropdown-item" href="#">Item 1</a>
               <a class="dropdown-item" href="#">Item 2</a>
               <a class="dropdown-item" href="#">Item 3</a>
               <a class="dropdown-item" href="#">Item 4</a>
              </div>
           </li>
         </ul>
      </div>

     </div>

    </nav>

    <div class="container">

      <p> Hello World, I'm a bootstrap layout</p>

      <div class="row">
        <div class="col-md-4 order-md-2 center">Center Column</div>
        <div class="col-md-4 order-md-1 left">Left Column</div>
        <div class="col-md-4 order-md-3 right">Right Column</div>
      </div>
    </div>

    <?php $jsFiles = scandir("dist/js", SCANDIR_SORT_DESCENDING); ?>
    <script src="dist/js/<?php echo $jsFiles[0]; ?>"></script>
  </body>
</html>
