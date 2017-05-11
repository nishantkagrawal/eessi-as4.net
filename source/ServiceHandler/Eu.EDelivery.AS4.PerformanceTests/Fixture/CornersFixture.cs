﻿using System;
using System.Threading.Tasks;
using Xunit;

namespace Eu.EDelivery.AS4.PerformanceTests.Fixture
{
    /// <summary>
    /// Fixture to define the fixture setup and teardown of the Corners (C2 and C3).
    /// </summary>
    /// <seealso cref="IDisposable" />
    public class CornersFixture : IDisposable
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CornersFixture"/> class.
        /// </summary>
        public CornersFixture()
        {
            Task<Corner> startCorner2 = Corner.StartNew("c2");
            Task<Corner> startCorner3 = Corner.StartNew("c3");

            Task.WhenAll(startCorner2, startCorner3).ContinueWith(
                task =>
                {
                    Corner2 = startCorner2.Result;
                    Corner3 = startCorner3.Result;
                }).Wait();
        }

        /// <summary>
        /// Gets the corner2.
        /// </summary>
        /// <value> The corner2.</value>
        public Corner Corner2 { get; private set; }

        /// <summary>
        /// Gets the corner3.
        /// </summary>
        /// <value>The corner3.</value>
        public Corner Corner3 { get; private set; }

        /// <summary>
        /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
        /// </summary>
        public void Dispose()
        {
            Corner2.Dispose();
            Corner3.Dispose();
        }
    }


    /// <summary>
    /// Placeholder for the <see cref="CornersFixture"/>.
    /// </summary>
    /// <seealso cref="Xunit.ICollectionFixture{CornersFixture}" />
    [CollectionDefinition(CollectionId)]
    public class CornersCollection : ICollectionFixture<CornersFixture>
    {
        public const string CollectionId = "CornersFixture";
    }
}
