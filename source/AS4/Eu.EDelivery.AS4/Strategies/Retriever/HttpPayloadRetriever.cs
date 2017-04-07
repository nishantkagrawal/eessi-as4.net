using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace Eu.EDelivery.AS4.Strategies.Retriever
{
    /// <summary>
    /// Web Retriever Implementation to retrieve the RequestStream of a external file
    /// </summary>
    public class HttpPayloadRetriever : IPayloadRetriever
    {
        /// <summary>
        /// Retrieve the payload from the given location
        /// </summary>
        /// <param name="location"> The location. </param>
        /// <returns> </returns>
        public Stream RetrievePayload(string location)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, new Uri(location));
            var client = new HttpClient();

            HttpResponseMessage response = Task.Run(() => client.SendAsync(request)).GetAwaiter().GetResult();

            if (response.StatusCode != HttpStatusCode.OK)
            {
                return Stream.Null;
            }

            return Task.Run(() => response.Content.ReadAsStreamAsync()).GetAwaiter().GetResult();
        }
    }
}