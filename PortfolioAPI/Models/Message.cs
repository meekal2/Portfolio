using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortfolioAPI.Models
{
    public class Message
    {
        public string MessageSid { get; set; }
        public string SmsSid { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string Body { get; set; }
    }


}