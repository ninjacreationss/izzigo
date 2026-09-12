// HLS Proxy Worker - Configurado para streamxhd.com
export default {
  async fetch(request, env, ctx) {
    // 1. Definimos las reglas de cabeceras por dominio.
    //    Añade aquí el dominio del stream y el Referer que necesita.
    const rules = {
      "fala.futlivehd.com": {
        "Origin": "https://gooz.aapmains.net",
        "Referer": "https://gooz.aapmains.net/",
      },
      // Puedes añadir más dominios aquí si lo necesitas.
      // "otro-dominio.com": { "Origin": "...", "Referer": "..." },
    };

    // 2. Obtenemos la URL del stream que nos pasan como parámetro.
    const requestUrl = new URL(request.url);
    const streamUrl = requestUrl.searchParams.get('url');

    if (!streamUrl) {
      return new Response('Falta el parámetro "url". Uso: ?url=TU_ENLACE_M3U8', { status: 400 });
    }

    // 3. Buscamos las cabeceras adecuadas para el dominio del stream.
    const streamHost = new URL(streamUrl).hostname;
    const headersToUse = rules[streamHost] || {};

    // 4. Preparamos las cabeceras para la petición al servidor original.
    const fetchHeaders = new Headers(request.headers);
    fetchHeaders.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Añadimos el Origin y Referer si existen en las reglas.
    if (headersToUse.Origin) fetchHeaders.set('Origin', headersToUse.Origin);
    if (headersToUse.Referer) fetchHeaders.set('Referer', headersToUse.Referer);

    // 5. Hacemos la petición al servidor de origen.
    const response = await fetch(streamUrl, { headers: fetchHeaders });

    // 6. Si la respuesta es un archivo m3u8, lo procesamos para reescribir los enlaces.
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('mpegurl') || streamUrl.includes('.m3u8')) {
      let m3u8Content = await response.text();

      // Reescribimos las URLs de los segmentos para que pasen por nuestro proxy.
      // Esto es clave para que los .ts también se carguen sin problemas.
      const baseUrl = new URL(streamUrl);
      const rewrittenLines = m3u8Content.split('\n').map(line => {
        if (line.trim() && !line.startsWith('#')) {
          const absoluteUrl = new URL(line, baseUrl).href;
          // El nuevo enlace apuntará a este mismo Worker.
          const proxyUrl = new URL(request.url);
          proxyUrl.searchParams.set('url', absoluteUrl);
          return proxyUrl.toString();
        }
        return line;
      });

      // Devolvemos el nuevo archivo m3u8 con los enlaces reescritos.
      return new Response(rewrittenLines.join('\n'), {
        headers: {
          'Content-Type': 'application/vnd.apple.mpegurl',
          'Access-Control-Allow-Origin': '*', // Permite que cualquier reproductor lo use.
        },
      });
    }

    // Si no es un m3u8 (ej. un archivo .ts o .mp4), simplemente lo devolvemos.
    return new Response(response.body, {
      status: response.status,
      headers: response.headers,
    });
  },
};
