using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebService.ViewModels;

namespace WebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Location> GetAllLocations()
        {
            return new List<Location>
            {
                new Location
                {
                    Title = "Everest",
                    Summary = "The best time to climb Mount Everest is in early May before the monsoon season. May, June, September, and October are ideal times to travel to Mt. Everest, with not so much rain and cold. Mid October to November is a good time to get views of the peak with clear and dry weather .",
                    Content = "Before you visit Mt. Everest, ensure you are in good physical condition. Seek medical advice in advance. If you have asthma, high blood pressure, or similar conditions you should be advised against going.\r\n\r\nDo physical training to avoid or reduce altitude sickness before you go, and acclimate in Lhasa (3,650 m) and Shigatse (3,800 m). Dingri (4,300 m) offers a good place to stop and acclimate further if you experience discomfort on the way from Shigatse. However, the EBC tour experience is not affected too much. The area around Rongbuk Monastery, the world’s highest Buddhist monastery (altitude 5,154m), is one of the best vantage points for a view of the imposing snow-capped Mt. Everest. Although a little further away than before, the new EBC is close enough for admiring the lofty view.\r\n\r\nThe new Everest Base Camp is near Rongbuk Monastery, about 4km north of the previous location. In January 2019, to protect the fragile ecosystem of the Mt. Everest area, the previous EBC site was abandoned and made part of the core protected zone of China’s Qomolangma National Nature Preserve (QNNP), which is forbidden to enter without permission."
                },
                new Location
                {
                    Title = "Haway",
                    Summary = "Hawaii, a U.S. state, is an isolated volcanic archipelago in the Central Pacific. Its islands are renowned for their rugged landscapes of cliffs, waterfalls, tropical foliage and beaches with gold, red, black and even green sands. Of the 6 main islands, Oahu has Hawaii’s biggest city and capital, Honolulu, home to crescent Waikiki Beach and Pearl Harbor's WWII memorials.",
                    Content = "All of the Hawaiian Islands have complex and fragile ecosystems that are easily affected by outside influences. This is partly why Hawaii has the highest number of endangered and threatened native plant and animal species of any place on the planet. An important value for native Hawaiians and Hawaii locals is the idea of malama aina or to care for the land. There are many ways visitors can learn about the native traditions used to work the land—and help locals keep Hawaii more sustainable for generations to come. For travelers interested in eco-tourism experiences, there are a variety of farm and agricultural tours, botanical gardens and more that showcase the islands’ unique environments. Embark on a farm tour to learn about the farm-to-table processes that are such a vital part of Hawaii Regional Cuisine, and see Native Hawaiian plants and flowers at Honolulu Botanical Gardens’ five diverse sites on Oahu. From December through May, go whale watching off Oahu’s southern coast to greet humpback whales on their annual visit to Hawaii’s warm waters."
                },
                new Location
                {
                    Title="Himalaya",
                    Summary = "The Himalayas, or Himalaya, form a mountain range in Asia, separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has many of the Earth's highest peaks, including the highest, Mount Everest.",
                    Content = "As a marvelous gift from the great nature, the Himalayas, as well as the surrounding areas, is the destination for many tourists. No matter you are planning your trip to Tibet, Nepal, Bhutan, Pakistan or India, the Himalayas is always on your list. For most general travelers, it is an impossible mission to conquer the highest peak of the world in the Himalayas, but it will be one of the most unforgettable journeys when you visit the forests, the villages, and the mountains of the Himalayas. Here are some interesting facts about the Himalayas. There are fourteen peaks exceeding 8000 metres in elevation in the Himalaya Ranges, namely Mount Everest (8848 metres), Godwin Austen (8611 metres), Kangchenjunga (8586 metres), Lhotse (8516 metres), Makalu (8463 metres), Cho Oyu (8201 metres), Dhaulagiri (8167 metres), Manaslu (8163 metres), Nanga Parbat (8125 metres), Annapurna (8091 metres), Gasherbrum I (8068 metres), Broad Peak (8047 metres), Gasherbrum II (8035 metres) and Shisha Pangma (8013 metres). Moreover, there are another thirty-six mountains over 7200 meters above the sea level. That’s why the Himalaya is the highest mountain range on the Earth."
                }
            };
        }
    }
}
