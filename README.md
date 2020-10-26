# Portfolio

My portfolio page, made with Next.js, hosted on Vercel. 

I went for something extremely minimal, but strikingly colorful. 
I really enjoy odd and unexpected color combinations, so I decided to have that be the main focus on my portfolio, while keeping text to a minimum so as to not overwhelm the user. I'm using the <a href="http://colormind.io/api-access/">Colormind API</a> to generate random color palettes, of which I extract a primary and secondary color for background and text, respectively. The colors can be refreshed by clicking the little refresh icon. 

As of now, the colors are random and on rare occasions, two low contrast colors are paired together and don't look great. I am planning on eliminating that soon.

# Things I learned while working on this project: 
- Cloudflare generates free SSL certificates. My coding projects are hosted on both Vercel and Heroku, the latter which doesn't offer SSL certificates if you are on their free tier. In order to circumvent this, I decided to use Cloudflare to ensure proper certificates for all projects. 
- You cannot make requests to HTTP endpoints from a domain using HTTPS. This will be flagged by your browser as 'mixed content', and be blocked for security reasons as a result. Since it's a third party API that I have no control over, one solution was to prepend the request with <a href="https://cors-anywhere.herokuapp.com/">Heroku CORS anywhere</a>, whch provides a proxy to redirect the request. In a real life scenario, I would opt to use something more secure.
- Achieving a pure CSS parallax effect was more difficult than originally anticipated, but learning about the concept was enjoyable nonetheless. <a href="https://keithclark.co.uk/articles/pure-css-parallax-websites/">Keith Clark</a> provides a very good, in-depth explanation that was a great help.
