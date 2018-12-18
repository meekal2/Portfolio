using PortfolioAPI.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using Twilio;
using Twilio.AspNet.Common;
using Twilio.AspNet.Mvc;
using Twilio.Clients;
using Twilio.Rest.Api.V2010.Account;
using Twilio.TwiML;
using Twilio.Types;

namespace PortfolioAPI.Services
{
    public class TwilioService
    {
        public static void SendSms(string msg)
        {
            var accountSid = ConfigurationManager.AppSettings["TwilioAccountSid"];
            var authToken = ConfigurationManager.AppSettings["TwilioAuthToken"];
            //var client = new TwilioRestClient(accountSid, authToken);

            TwilioClient.Init(accountSid, authToken);

            var to = new PhoneNumber(ConfigurationManager.AppSettings["MyPhoneNumber"]);
            var from = new PhoneNumber("+13237161747");

            var message = MessageResource.Create(
                to: to,
                from: from,
                body: msg
                //client: client
                );

            var statusCode = TwilioClient.GetRestClient().HttpClient.LastResponse.StatusCode;
        }

        //public string ReceiveMessage(Message);
        //{
        //    TwilioClient.Init(accountSid, authToken);

        //    var messagingResponse = new MessagingResponse();
            

            
        //}
    }
}