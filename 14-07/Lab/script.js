// Ques: Building a Simple Image Carousel
// Problem Description:
// You are developing a simple image viewing application. Your goal is to display a single large image at a time,
// and allow users to navigate between multiple images using "Previous" and "Next" buttons. When the user
// reaches the end of the image list and clicks "Next", it should loop back to the first image. Similarly, when
// they are at the first image and click "Previous", it should loop back to the last image.
// Requirements:
// 1. In html create a div container and inside that take two buttons and image tag with id.
// 2. Create an array containing some image names (images must available in current folder).
// a. Ex. const imgArray = [ “image1.jpg”]
// 3. Create a nextImage() function to increase the index value by one and change the image src to the
// current index number of the imgArray and increase the index value.
// 4. Create prevImage() function to decrease the index value by one and change the image src to the
// current index number of the imgArray and decrease the index value by one.
// Validations: - -
// If the index number is greater than imgArray length start it again from 0
// Index > imgArray.length    :  index = 0;
// If the index number is less than 0 again start it with the imgArray length.
// Index < 0 : index = imgArray.length - 1
// Note: Use Bootstrap CSS and Bootstrap icons for designing