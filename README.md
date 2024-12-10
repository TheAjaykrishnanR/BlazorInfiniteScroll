# InfiniteScroll

A blazor custom component for [https://www.fluentui-blazor.net](FluentUI) which acts as a container for dynamically adding content while being scrolled. Use the native `<Virtualize>` tag if you have millions of items and need optimization/offloading of items when they are outside the view.

## Usage

1. create blazor web application (server)
  a. `dotnet new blazor` (or)
  b. `dotnet new fluentblazor`  
3. place `InfiniteScroll.razor` under Components
4. place `InfiniteScroll.js` under wwwroot
5. place `Loading.gif` under wwwroot
