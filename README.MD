# Hello and welcome on the quote generator for OpenClassRooms.

## Notes from Rita : 
### Summary

I appreciated Sébastien's work on the quotation generator, his answer to my questions, and especially that he used vanilla Javascript (no jQuery), but what he built, while good, doesn't meet the project specifications so I am recommending that Sébastien rework the project and present it again at a later date. Below is some feedback to help Sébastien to rework the project.

 

### Feedback - **the bolded items are necessary, the rest optional ways to improve the project**

1. The project files should be kept by the student in their google drive or similar cloud storage - I noticed that right now it is under the mentor's name. **Also, all of the code files should be included (I noticed not all of the files were there).** 

2. **Project Specifications: There should be two quote generators, one of which takes sentence fragments and puts them together to form a (more or less coherent) sentence. This is main part of the project that is missing. You mentioned that the project instructions were not clear - ask your mentor and if they don't know, they can ask other mentors or the curriculum team. You did good work but the specs weren't met!** 

3. Currently, you are adding bootstrap as a set of downloaded files. It is better to add bootstrap and other libraries using CDN (Content Delivery Network) links like those found here: https://www.bootstrapcdn.com/ . Make sure you select the right version of Bootstrap when adding a CDN!
--> Done

4. **Currently, on-click event listeners are placed inside the HTML code; since you have an external JavaScript file, all of your functionality should be placed there. Move your event listeners to the Javascript file.** 
--> Done.

5. Add the viewport meta-tag to your HTML in order to make your website responsive: https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag . Because your code is not all in the files I was not able to **check to make sure the website is now responsive** - double check that this is the case.
--> Viewport meta-tag added
--> Responsiveness

6. Consider using semantic HTML tags consistently (you use some, then revert back to generic
tags). Resurces: https://www.w3schools.com/html/html5_semantic_elements.asp  and https://www.lifewire.com/why-use-semantic-html-3468271. 

7. **Your should be inside of tags: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form .**

8. You make good use of constructor functions and should be able to explain their use. Read up on these, here is just one good article of many you'll find if you Google "constructor functions js": https://thejsguy.com/tutorials/javascript-constructor-functions-and-classes. 
