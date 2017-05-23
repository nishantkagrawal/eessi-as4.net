﻿using System;
using Eu.EDelivery.AS4.Model.PMode;
using FluentValidation;

namespace Eu.EDelivery.AS4.Validators
{
    /// <summary>
    /// Validator to check the <see cref="ReceivingProcessingMode"/>
    /// </summary>
    public class ReceivingProcessingModeValidator : AbstractValidator<ReceivingProcessingMode>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ReceivingProcessingModeValidator" /> class.
        /// </summary>
        public ReceivingProcessingModeValidator()
        {
            RuleFor(pmode => pmode.Id).NotNull();

            RulesForReceiptHandling();
            RulesForErrorHandling();
            RulesForDeliver();
        }

        private void RulesForReceiptHandling()
        {
            RuleFor(pmode => pmode.ReceiptHandling).NotNull();
            RuleFor(pmode => pmode.ReceiptHandling.SendingPMode).NotNull();
        }

        private void RulesForErrorHandling()
        {
            RuleFor(pmode => pmode.ErrorHandling).NotNull();
            RuleFor(pmode => pmode.ErrorHandling.SendingPMode).NotNull();
        }

        private void RulesForDeliver()
        {
            Func<ReceivingProcessingMode, bool> isDeliverEnabled = pmode => pmode.Deliver.IsEnabled;

            RuleFor(pmode => pmode.Deliver.DeliverMethod).NotNull().When(isDeliverEnabled);
            RuleFor(pmode => pmode.Deliver.PayloadReferenceMethod).NotNull().When(isDeliverEnabled);

            RuleFor(pmode => pmode.Deliver.DeliverMethod.Type).NotNull().When(isDeliverEnabled);
            RuleFor(pmode => pmode.Deliver.DeliverMethod.Parameters).NotNull().SetCollectionValidator(new ParameterValidator()).When(isDeliverEnabled);

            RuleFor(pmode => pmode.Deliver.PayloadReferenceMethod.Type).NotNull().When(isDeliverEnabled);
            RuleFor(pmode => pmode.Deliver.PayloadReferenceMethod.Parameters).NotNull().SetCollectionValidator(new ParameterValidator()).When(isDeliverEnabled);
        }
    }
}
