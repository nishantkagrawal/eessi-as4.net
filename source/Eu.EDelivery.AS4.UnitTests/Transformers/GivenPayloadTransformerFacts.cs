using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Eu.EDelivery.AS4.Model.Core;
using Eu.EDelivery.AS4.Model.Internal;
using Eu.EDelivery.AS4.Transformers;
using Xunit;

namespace Eu.EDelivery.AS4.UnitTests.Transformers
{
    /// <summary>
    /// Testing <see cref="PayloadTransformer" />
    /// </summary>
    public class GivenPayloadTransformerFacts
    {
        public class GivenValidArguments : GivenPayloadTransformerFacts
        {
            [Fact]
            public async Task ThenTransformSucceedsWithValidStreamAsync()
            {
                // Arrange
                var stream = new MemoryStream(Encoding.UTF8.GetBytes("Transform me!"));
                const string contentType = "text/plain";
                var receivedMessage = new ReceivedMessage(stream, contentType);

                // Act
                MessagingContext messagingContext = await new PayloadTransformer().TransformAsync(receivedMessage);

                // Assert
                Assert.NotNull(messagingContext);
                Attachment firstAttachment = messagingContext.AS4Message.Attachments.First();
                Assert.Equal(contentType, firstAttachment.ContentType);
                Assert.Equal(stream, firstAttachment.Content);
            }
        }
    }
}