var blogsArr = [];
var count = 0;

function addBlogsPost() {
  var blog = $('#blog_area').val();
  //alert("blog: "+ blog);
  // Store blogs in a local storage
  blogsArr.push(blog);
  count ++;

  // Display blogs
  var blogsBuffer = "";
  for (var i=0; i<blogsArr.length; i++) {
    blogsBuffer = blogsBuffer + "Previous post " + (i+1) +" : ";
    blogsBuffer = blogsBuffer + blogsArr[i] + "<br>"; 
  }
  $('#blogs').html(blogsBuffer);
  $('#blogs_count').html("Total blogs = "+count); 

}

function clearAllBlogs() {
  count = 0;
  blogsArr = [];
  $('#blogs').html("");
  $('#blogs_count').html("Total blogs = "+count);
}