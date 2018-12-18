using Microsoft.AspNet.SignalR;
using PortfolioAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Twilio.TwiML;

namespace PortfolioAPI
{
    public class TwilioHub : Hub
    {
        readonly TwilioService twilioService;

        public TwilioHub(TwilioService twilioService)
        {
            this.twilioService = twilioService;
        }

        private static ConnectionMapping<int> _connections = new ConnectionMapping<int>();

        public override Task OnConnected()
        {
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            return base.OnDisconnected(stopCalled);
        }
    }
}