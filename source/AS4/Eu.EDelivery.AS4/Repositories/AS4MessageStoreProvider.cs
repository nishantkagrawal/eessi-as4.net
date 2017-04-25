﻿using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using Eu.EDelivery.AS4.Exceptions;

namespace Eu.EDelivery.AS4.Repositories
{
    public class AS4MessageBodyRetrieverProvider
    {
        private readonly ICollection<AS4MessageRepositoryEntry> _repositories =
            new Collection<AS4MessageRepositoryEntry>();

        /// <summary>
        /// Accept a <see cref="IAS4MessageBodyRetriever" /> implementation based on a given <paramref name="condition" />.
        /// </summary>
        /// <param name="condition">The condition when to use the <see cref="IAS4MessageBodyRetriever" />.</param>
        /// <param name="retriever">
        /// <see cref="IAS4MessageBodyRetriever" /> implementation used for a given
        /// <paramref name="condition" />.
        /// </param>
        public void Accept(Func<string, bool> condition, IAS4MessageBodyRetriever retriever)
        {
            _repositories.Add(new AS4MessageRepositoryEntry(condition, retriever));
        }

        /// <summary>
        /// Gets a <see cref="IAS4MessageBodyRetriever" /> implementation based on a given <paramref name="key" />.
        /// </summary>
        /// <param name="key">Key to identify the accepted <see cref="IAS4MessageBodyRetriever" /> implementation.</param>
        /// <returns></returns>
        public IAS4MessageBodyRetriever Get(string key)
        {
            if (string.IsNullOrWhiteSpace(key))
            {
                throw new ArgumentNullException(nameof(key));
            }

            AS4MessageRepositoryEntry result = _repositories.FirstOrDefault(s => s.Condition(key));

            if (result == null)
            {
                throw new AS4Exception($"No registered IAS4MessageRepository found for {key}");
            }

            return result.Store;
        }

        private sealed class AS4MessageRepositoryEntry
        {
            /// <summary>
            /// Initializes a new instance of the <see cref="AS4MessageRepositoryEntry"/> class.
            /// </summary>
            /// <param name="condition">The condition.</param>
            /// <param name="store">The store.</param>
            public AS4MessageRepositoryEntry(Func<string, bool> condition, IAS4MessageBodyRetriever store)
            {
                Condition = condition;
                Store = store;
            }

            public Func<string, bool> Condition { get; }

            public IAS4MessageBodyRetriever Store { get; }
        }
    }
}