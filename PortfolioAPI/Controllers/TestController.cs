using Microsoft.AspNet.SignalR;
using PortfolioAPI.Models;
using PortfolioAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using Twilio.TwiML;

namespace PortfolioAPI.Controllers
{
    [RoutePrefix("api/test")]
    [EnableCors(origins: "http://d2qzsnq0bgihxy.cloudfront.net", headers: "*", methods: "*")]
    public class TestController : ApiController
    {
       
        [HttpPost, Route("send")]
        public void SendMessage(Send send)
        {
            TwilioService.SendSms(send.Msg);

        }
        [HttpPost, Route("receive")]
        public void ReceiveMessage(Message message)
        {
            var body = message.Body;

            var hubContext = GlobalHost.ConnectionManager.GetHubContext<TwilioHub>();
            hubContext.Clients.All.NewMessage(body);

        }
    }
}