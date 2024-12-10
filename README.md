# InfiniteScroll

<br>
<div align="center">
	<img src="https://github.com/TheAjaykrishnanR/BlazorInfiniteScroll/blob/main/demo.gif" style="width: 400px;"/>
</div>
<br>

>A custom blazor component for [FluentUI](https://www.fluentui-blazor.net) which acts as a container for dynamically adding content while being scrolled. Use the native [`<Virtualize>`](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/virtualization?view=aspnetcore-9.0) tag if you have millions of items and need optimization/offloading when they are outside the view. This is a simple component with predictable behavior suitable for lighter usecases. Most importantly unlike `<Virtualize>` there is no funny crazy business going on.

## Usage

1. Create blazor web application (server)
   `dotnet new blazor` (or)
   `dotnet new fluentblazor`  
2. Place `InfiniteScroll.razor` under Components
3. Place `InfiniteScroll.js` under wwwroot
4. Place `Loading.gif` under wwwroot

## Example 

```html
<FluentStack 
	HorizontalAlignment="HorizontalAlignment.Center"
	Style="width: 100%;">
	
	<InfiniteScroll
		Orientation="Orientation.Vertical"
		HorizontalAlignment="HorizontalAlignment.Center"
		Items="@([1, 1, 1, 1, 1, 1, 1, 1])"
		Callback="@_Callback"
		LoadingAnimation="3000"
		Style="width: 300px; overflow-y: scroll; height: 40vh; border: 1px dotted black;">
		
		<p>Hello</p>
	</InfiniteScroll>
</FluentStack>

@code{

	private async Task<List<object>> _Callback() {

		return (new List<int>() {1, 1, 1}).Cast<object>().ToList();
	}
}
```
