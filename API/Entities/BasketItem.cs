using API.Entities;

namespace API.Basket;

public class BasketItem
{
    public int Id { get; set; }
    public int Quantity { get; set; }

    // Navigation properties
    public int ProductId { get; set; }
    public required Product Product { get; set; }
}