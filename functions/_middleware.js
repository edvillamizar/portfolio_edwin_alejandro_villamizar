   export function onRequest(context) {
     const url = new URL(context.request.url);
     if (url.hostname === 'portfolio-edwin-alejandro-villamizar.pages.dev') {
       return Response.redirect('https://edwinvillamizardiaz.com' + url.pathname + url.search, 301);
     }
     return context.next();
   }