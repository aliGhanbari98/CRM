const thanksGiving = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template</title>
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        background-color:{{background.color.hex}};
      }
      table {
        border-spacing: 0;
      }

      td {
        padding: 0;
        text-align: center;
      }

      tr,
      tbody,
      td {
        width: 100%;
      }

      .main {
        max-width: 600px;
        display: block;
        margin: 0 auto;
        padding: 30px 40px;
      }

      .wrapper {
        width: 100%;
        table-layout: fixed;
      }

      a{
        text-decoration : none;
      }
      

      tbody {
        width: 100%;
      }

      .outer {
        width: 100%;
      }

      .column {
        vertical-align: top;
      }

      .chicken {
        max-width: 300px;
        min-width: 300px;
      }

      .title {
        text-align: left;
      }
     
      .selectable:focus {
        outline : 2px solid blue;
      }

      .text{
        font-size : {{text.fontSize}}px;
        color : {{text.color.hex}};
        text-align:{{text.textAlign}};
        font-weight : {{#if text.bold}}bold{{/if}};
        font-style: {{#if text.italic}}italic{{/if}};
      }

      .header {
        font-size : {{header.fontSize}}px;
        color : {{header.color.hex}};
        text-align:{{header.textAlign}};
        font-weight : {{#if header.bold}}bold{{/if}};
        font-style: {{#if header.italic}}italic{{/if}};
      }

      .icon {
        height: 40px;
      }

      span {
        display: inline;
        width: 100%;
      }

      span img {
        display: inline;
      }

      span > * {
      }

      .turkey {
        max-height : 200px;
        background-color:{{picture.color.hex}};
      }

      span *:first-child {
        margin-left: 0px;
      }

      .website-button {
        border: none;
        outline: none;
        font-size: {{button.fontSize}};
        color: {{button.textColor.hex}};
        border-radius: 3px;
        background-color: {{button.color.hex}};
        font-family: Roboto;
        font-size: {{button.fontSize}}px;
        font-weight: bold;
        letter-spacing: 1px;
        padding: 0px 10px;
        height: 30px;
      }

      @media screen and (max-width: 600px) {
        .section {
          width: 100%;
        }
        .turkey {
          max-width: 200px;
        }
        .column {
          display: block;
        }
        .title {
          text-align: center !important;
        }
      }

      @media screen and (max-width: 400px) {
      }
    </style>
  </head>
  <body id="body" onclick="{{stringifyFunc onBodyClick}}">
    <div>
      <div class="main">
        <table class="outer">
          <tr>
            <td>
              <table class="section">
                <tr>
                  <td>
                    <img
                      width="100%"
                      style="max-height: 150px"
                      alt={{background.alt}}
                      src="https://png.pngtree.com/thumb_back/fw800/background/20190828/pngtree-merry-christmas-banner-background-image_302664.jpg"
                      style="max-width: 100%"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <table class="section"">
                <tr width="100%">
                  <td width="100%" class="title">
                    <h3 id='templateHeader' class="header selectable"  onclick="{{stringifyFunc onHeaderClick}}" contenteditable="true">{{header.content}}</h3>
                  </td>
                </tr>
                <tr class="column">
                  <td class="column">
                    <p id='templateParagraph' class="text selectable" tabindex="0"  onclick="{{stringifyFunc onTextClick}}" contenteditable="true">
                     {{text.content}}
                    </p>
                  </td>
                  <td style="min-width: 100px; max-height: 5px"></td>

                  <td class="column">
                    <img
                      onclick="{{stringifyFunc onPictureClick}}"
                      tabindex="0"
                      class="turkey selectable"
                      alt={{picture.alt}}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuKj1peCf88s9HXPxdnefNyI_BuJODwIHCQ&usqp=CAU"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding-top: 40px">
              <table width="100%">
                <tr>
                  <td width="100%">
                    <button class="website-button selectable" onclick="{{stringifyFunc onButtonClick}}">Click to see website</button>
                  </td>
                </tr>
                <tr>
                  <td  class="selectable" style="padding-top: 40px;" tabindex="0" onclick="{{stringifyFunc onSocialMediaClick}}">
                    <span>
                    {{#each socialMedia}}
                      {{#if this.active}}
                        <a href="this.link">
                          <img
                            class="icon"
                            alt="social-media"
                            src={{this.imageSRC}} />
                        </a>
                      {{/if}}
                    {{/each}}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>
`

export default thanksGiving
