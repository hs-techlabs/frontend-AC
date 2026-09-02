const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    
const listingSchema = new Schema({
    title:{ type: String, required: true },
    description:{ type: String, required: true },
    image:{ type: String, 
        default: 
        "https://www.google.com/search?q=images+home&sca_esv=a4d55c734b6b3025&udm=2&biw=1277&bih=748&sxsrf=APpeQnu7b2WBTSy697CWYH3BBmr6WGGm9Q%3A1788115749643&ei=JXuUavfuJsa7seMPpfmXoAo&ved=0ahUKEwi3lcyggsmWAxXGXWwGHaX8BaQQ4dUDCBE&uact=5&oq=images+home&gs_lp=Egtnd3Mtd2l6LWltZyILaW1hZ2VzIGhvbWUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESN0VUM0CWMcUcAF4AJABAJgBxwGgAawFqgEDMC41sAEAuAEDyAEA-AEBmAIGoAK3BcICEBAAGIAEGIoFGEMYsQMYgwHCAgYQABgHGB7CAggQABiABBixA8ICDRAAGIAEGIoFGEMYsQPCAgoQABiABBiKBRhDwgILEAAYgAQYigUYsQOYAwDiAwQYACBd4gMEGAAgXuIDBBgAIF_iAwQYACBg4gMEGAAgYeIDBBgAIGKIBgGSBwUxLjQuMaAH6BeyBwUwLjQuMbgHtQXCBwMwLjbIBweACAE&sclient=gws-wiz-img#sv=CAMSURoyKhBlLTA5bVJnMXNvX1libDlNMg4wOW1SZzFzb19ZYmw5TToOTWJRdGk4S1E0TjhfY00gBCoXCgFzEhBlLTA5bVJnMXNvX1libDlNGAEwARgHIJGQ4eAISggQARgBIAEoAQ",
        set:(v)=>
            v==="" 
                ? "https://www.google.com/search?q=images+home&sca_esv=a4d55c734b6b3025&udm=2&biw=1277&bih=748&sxsrf=APpeQnu7b2WBTSy697CWYH3BBmr6WGGm9Q%3A1788115749643&ei=JXuUavfuJsa7seMPpfmXoAo&ved=0ahUKEwi3lcyggsmWAxXGXWwGHaX8BaQQ4dUDCBE&uact=5&oq=images+home&gs_lp=Egtnd3Mtd2l6LWltZyILaW1hZ2VzIGhvbWUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESN0VUM0CWMcUcAF4AJABAJgBxwGgAawFqgEDMC41sAEAuAEDyAEA-AEBmAIGoAK3BcICEBAAGIAEGIoFGEMYsQMYgwHCAgYQABgHGB7CAggQABiABBixA8ICDRAAGIAEGIoFGEMYsQPCAgoQABiABBiKBRhDwgILEAAYgAQYigUYsQOYAwDiAwQYACBd4gMEGAAgXuIDBBgAIF_iAwQYACBg4gMEGAAgYeIDBBgAIGKIBgGSBwUxLjQuMaAH6BeyBwUwLjQuMbgHtQXCBwMwLjbIBweACAE&sclient=gws-wiz-img#sv=CAMSURoyKhBlLTA5bVJnMXNvX1libDlNMg4wOW1SZzFzb19ZYmw5TToOTWJRdGk4S1E0TjhfY00gBCoXCgFzEhBlLTA5bVJnMXNvX1libDlNGAEwARgHIJGQ4eAISggQARgBIAEoAQ" 
                : v,
    },
    price:{ type: Number, required: true },
    location:{ type: String, required: true },
    country:{ type: String, required: true },
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;