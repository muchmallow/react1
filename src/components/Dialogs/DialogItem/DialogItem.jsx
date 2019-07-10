import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return (
		<div className={classes.dialog + " " + classes.active}>

			<NavLink to={"/dialogs/" + props.id} className={"navlink"}><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIVFhUVFRgYFRUYGBgVGBoXFhcXFxgXFxgdHSggGBslGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS4uKy0tLS0vLy4tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcCAwj/xABCEAABAwEGAwUFBwIEBQUAAAABAAIRAwQFEiExQQZRYQcTInGBMpGhscEUM0JSYnLR4fAjNFOSFXOCsvEXJKKzwv/EABoBAAIDAQEAAAAAAAAAAAAAAAACAQMEBQb/xAAxEQACAgEDAgQGAQIHAAAAAAAAAQIDEQQhMRJBBRMiURQyYXGBsZE0oRUjM1JiwfD/2gAMAwEAAhEDEQA/ANElEoQmICUShCAO2OXoHLwXbCgD2lISlRCAOZRK5rVGsaXvcGtAkucQAB1JVFvvtHot8FnaapI9rMD03KG8Ak3wXyU0tF60Kf3lZjfM/wALLLRxBbq8YnFjDt06AJo27MRl73PPU5e6VVK6KN1Ph19m+Mfc1ahxHZHmGV2k+o+ikKdZrtHA+5ZFTufCMQpuAGUwfT1T6nUrMEDG33hVrVwL34TYuJI1KUSsr/41a2nKrOehlSth42qsgVqU9Rnp6K2NsJcMyWaK+HMS/wAolRN0cRWe0ENZUAefwOyPpzUx3ZVhlawcylxLoU0vdoAWm8pw0rxYxeoQB1KWUiEAEpZSIQB1KJSBKgBZQkQgCIQkQgBUJEIAF6UwuAF7NCAOwmF+XxRslI1qzoaNAPacfytG5XV8XpTs1J1aqYa3YauJ0a0bklZDeNStba3f2nJoMU6X4WtO3npPkknNRW5o0+msvliKEvi+LVeT5ce7oA+CmMvU/md105J1dF0aMYwE6SN9pJU3c9wvfEjCyPX0+Ct1isNOmIaAIEE842PM6+9cXVeIqO0d2duEaNJHC3l7kHZeFhHjeZ3DdBP6lK2e7aLDgaBiLZiMRgZTJy1hFtvSlTMEknFmM8gBmWwMwourxE4wGiJJiBh8I5tzg6bjdYYUavUb8L+DmanxeEdpS/CLA+jloTpqcOcg66zp8Fy0TILRAMAh06ga8iFUbTez3HxfijEJaBlGHwkkg6aJuL6Obu9bJ8LvE3xCIIPhhxjbVXrwe3G8jn/4zHOyZcqt3UnasbryGufvTGtw9QcMm4cjHtDXc6yq/Rvgz94xxZIAO2KcjMR5ajyUnZb/AHAtmS0DCeuUg577a5hEvDtTXvCWS+vxqPfKIm+eFCwY2EuAjMSHgicwRqP4Ujw1xfUpgU7S41WZAVQPG0fqA9ofFS9lvmnUifC6HSNvDHvkZ5cl4XjcVKrm2GnMy2MzE6J6dbdS+m5P7nRhbptSvVjPui3UKzXtD2ODmuEgjMEdF6LM7ot1WwVYeD3Ts6jNRp7bP1DKea0mhWa9oe0gtcAQeYK7lVsbI5Rz9Rp5Uvfjsz0CUJEoVpnOgllIlCABCEiAFCVIEoQAsISpEAQyEIQAIQumhAHTAu3vDQXOIDQJJOgA1JQFTuN7yc94sdOdQ6rGpkSxn1PolnNQjlltNLtmoogL5vF9tr4od3bcqNPpnLyPzH4BWG6eHGth1TxHPw/hHL++qc3BcopDE7Nx06Dl790t53w1rTgIMsJxNJBBBjSMhr5rzl+ot1NnRUde/VV6Wvpi8Jd/ceWy2spN2mWjDOE59d8tgq5eF7uqZNHhDjGTZEQNR7JzzGZ8lCXve7GF3eHxZODQXB2fOfZb03hVO9b4fVJ2AdLdiPKPqulpfDq6fVLeR5i3UX6t4jtEnbXf1NgbnjPiDmt8AA00Il8Z7hQde/KrgGjwgEmGy0H9zQV4We7K1TONsUu1M7jmpqzcPsE4iSeekei2ytjE6Gk8FlLfH5ZA99UcIBMB2KBnB0yOoXoLNWOIhr8iC7X2ufnnr1V7sd1OdiwUuWIaaaeqe0eH6jm4oEOjLPENpI6LJPXQjyzrLwmmHzTRnlps1o8WJrvEQXdTsfNedkvKrRdPiyObTLZnIgrTqnDFXMS0wJB5/pHIqLt9wO8IfSxYpIGpyG413UV6+uXcWfhVE1iEl+Ss2XiXTvBJJI2AGkE/mOvI9c1b7ivwNbIdjBwCXHOOu8xkJ5DNVC2cOiJYYIxEzpGcCPgoqlXq0HA5g5e7l5QtMlXdHEtzjajwy3TPqht+janNpWlhBAOsaSIMT0814XNajY6vcVCTRqH/AA3flMxB5Ayqdw7fYJBnCY8TRrGLMj+PorvSqU7TTggQQZE5iDr9VyJwnoZ9Ud4GrSaxXxdVvP8A7dFsQoTh21PE2eoSXMHgefxsy+LZAKnF3KrI2RUolNkHCWGKF0FwF0FYVioSoQAiUJEqAFlCRKgCHQhKgBIXbQkAXSAG953gyhSdVfo0ZDm45NaPMwFUOFLO6o99pqDxucSB1OsdNgvXjGsa1elZWkw2HP5YnaT5Cfepio5tClDSG4RDARlIE7a7ri+KahvFUOWdSmKopdj5f6G1+3x3fhbqYh0iBnmMuUD3wqBfV94J8QdUJcHiSC2dCIEYvkuuIL2DS6IxOJEAwWgyQYE6GfUlViw2V9Z0yS0RicZMDp6Stml00NPX9e7OJGuzW25fHZHDG1a7olziBqTMCdTKsl3XGymQ4kucTGkjPon103ZBbTYBiEDFmJBz8R+nRXey3XRoAVHHxNGbjvPTcrNqtcobLn2PT06WnSxTnvIhbo4ec8Nc4xTOUA54do5clP0rts9HIxIMtJ9rpMaphar6c4kM8LZ9T/HoubOJ685+q57hbbvN4XsTO6yfLwiXfeLZ8LSTzOX9Vy621CJGEek/VJRs2i9nUuQ+GX9VdDRVpcGZtEdWvGq3dv8AtXFO/wAg+JnqP4K9LZQUHaR/Cielr9iyKTJw07NaA1oMQSY0dnrr1Mqs8Q3BhaZGJjnGOeQgEx815VXEZgkKXuS/pPc1oMyGuOeZ2M/NRFWU+qLyvYsja4bPdexmVps1SzPBBMT4XDKYzPkrfwnf5MEAAjC1wjacy36hO+JLma2WlssM4DqRzjkZVCa99nqxy2nIg7e5deuyGorw+5yvEdD0Yuq/Bt1KuCGV2jNuY8vxN9R9FZqbw4AjMESPVZ5wnbS9sYmwRIzknQACdYAKtlzWwAmkfw+z+3aFl0OabZUPjlFTn51Ss78MmV0EgShdYpFSpAhACoCEqABCEIAiQEFKFyUAdBKkC6agCqXbZ8VqtNY/6jmDybr8gmHGNtwnDnDGYiIyk5yOeR06KUuG142VX5ffViT5PMfRZ5xZeU44kF7shJ8I3g7gukeq4Omg7NZKb7F/iNjlXGtd8fwQFSo6vWAGf4QNMhofdzVzua6vZpUhJjXT1coLhmxAM7w6nTLMDTJaDSdRsdHvawaXZuBZL3EgbCMoWnW6hxXTHnsdjQ0rS09ePU+CRDqNjoEkw0a6FxdyHMlU+1X0+u/E4kD8LNmj6nqq5evElS2VsRyY32Gaxlqf1FP7t1WWnSOHqnvJlCs65ZZO2TNTti2UVYaEiVM2akQre5Y3sSQflC9RmNYkJvSpn0TujR05cuvVWplEtiNtjROshQ9pognQKz26z8gFEVLNCrknkthJYK3bqUCVC2hW62WUEKv3jZYGSavkLHlExw5eYtdJ9nqECqwakSSzKHjrIg+hVR4ku44SY8VPETtkM3E+6Qox9ufZ7VSrM1bOWmIfiaehCu/EOGvTp2mmJbVb48WYBjwiNyMx6KFHyLdvlf7J01ishKmXcg+BrwIiSYY4RAGhzgf3urZf94/Z7XZ3g+FwLHehy+azrh5/dWhzZOU7x7JBHqrR2juPdWZ0AZnQzoAIn0KvtjjUVzXfKONUul2Vv7mv2aqHNDhuF7Kr9nt5d9ZGZ5tEH0VoXRFFSpEqAFCEJUACEIQBEBCAhAChJVcQ0kagEjzAXQXFpEseObXfIqHwTHlFGumrhsTyYGIuPKS4yR55arOeI6+J7W56Amebs55nKNVolZuG7mxuG5DPWTn0WY3v/mXDP2mxnP4W/wBwuboOJy+pZq/Vq0vZF54fsoxUWZQI1lwyBPr5Kb40tzGPo03QMbX4TtILRHSZyUbw4T9op5uGTpMCYw77BQvavVL69Fo0bTOentOy/wC1Ypw83VKL9md/WWupxa7IYG7sLnOptOEmSACYO/opO72VP9N482kfROOAryLHGm8nE4eAn8WHUHqk4u7Qq1Cs6hRDZZGJx5kTAAXQhB8M4Op1z89xriTNit7matd/tI+MKZsl9UT7Rg8iFlZ7Srx/1Gf7AvWz9odtM4+7fGZlgVnkC/E2+39zbrJUY8S0g9ck8FMA6rDrJ2jlp8dnHnTdhPuOSvPDnGLLUCab3S0DEx7RiE6aHMdZSuDXYj4vp+dNF4rhp3UZaWsbJMf3uo+03m7p01Vbv/iyzUSWVHPqPHtMZEDoTt71XhyfA0ddVxFt/Y972vqm0kB3QKp3lfTicOGJOh+iZ2jjWgDLLC3ze6T9V5t4+O1jo+8/wrY1Y7Cy1dr4iR9/g+F3I/Aq3WXxWGm5hPhIDhPMeEnrq30UKzj2mfvLEwjoQT8QrdWtVFtifXpgNpvoucB7M+EkAjnPxSXQlLH0Fp1zqtTlHZso9ldhthAnM55T+HYHeVZOOnj7HZhqcZz0/Dp5/wBVVLFUbUtQc0ZOiMz+XmrV2kk/Z7NORk5HXTNNd89a+o7w77JL2/7JrsYtZIq09hBHxWorIexQHvKv7QtghbUViBKEICkDoJUgSoAEIQgCICVIEpQAoShcyughgUm30j9lqszHdlzeUhjj78oWT3yR35Os4ToeQ9/KVuN92XxPAy72m7bLE0RmN8sPuWJcRUoeNZiOmR2G2y5ukj0Tsh9c/wAll7/zoWe6L3w8/wDxmZDMHUxHhlRfHDCbUCc5DR7gSTG2q6uG1gdzUO0ZxOWh1S8b1IAfhzLhnqI0I+SoSxqU/od3X+qCl9BtYCG1GP2aR81XO0elgt9X9YY73tj6KxXeMWXMJl2iWE1G0LSOXdVPMGWk+clbYP1YOFqIYnGfvsUeknGhyPuXg9sH+M0octAors1fOymzkvrVI8LWtZPNzyTl6Ae8KnXfYDVeBMNOUgSSdmgblbHwpdLbNSZSAzBxvP6zt1jIeiqtmkhZQdjUF3/RLWqzhj2jE456GPoFhN7lzbRXDiZ7x8z+4rcr7rfjG0fBZN2h3fgtRrNHgrMDwf1aOHnkD6qqiWW0PdQqrE4rZr9FcaZ1K5qH3DReGNGJa0QdnkFdeMS4UrDYQYim11QfqIET5S4qF4Murv7QC77qn46jjoGtziepgeq9L0vM17VVr7ezTzjLMNj0n3qt8iRip2rPC3HnCVjJrCDIblPMzHylTvahafHRoxHd0w4jYFxiPcE54Du/CO8fAY0F7yRlGwPX+VTeILz+016tbZzvD+0ZD++qpl671/xX7GqeVKXvx+DVexqyAMfUjUALTFQeyEf+1PmFflsRAiRdLlSB0F0uQukACEShAEQ1K5I1K5ACBdtXAXbUANL2pSzFuw4h9fgsi7QbsDX4mNge1m6cjqeme3RbU4ZQqPxNdIcwsaJfTzaMs2HY9AsNy8u1W9nsxpLqrwuVujMLgt8HunaH2fPcKxXnUFWzuY4nEwEs5GBmPOAPcqfeNiNN0iYOnTzhPrJeoc3BUMGIDvTKU1tOWpI6Wk1cLafKn+GPbgtUGDsrdRs4rNczCHNcPEx3suG2YzaRsQs/s78JDhvurtw7eI0JVdqa9SEgozi4SGFr7Oqbj4DWp9CG1m+hDg74JqzsxcM3Wgx0ouB+LgFpdntgRVt+LIbJVfLAvwizyyrXDw1Rs0Fgc5wmHviQSMyGjIHrmVPWKMSbUa73PdyBIXvd7TJPM5eSqlJyeWaK6YV/Ke170gW5DVVG22RlWmaNVpcycTSDD2Hm36hXu10iWQR/eyp1rY7GcOsfIpoZTItrjZHDKjX7P6jjNKqxzf1Newx1gEIo9nzwf8WrA5U2OcT5FwaAr/YLVAE+9d3jbBGuasV884Mz0a/3MpHENYUbG+jRp91SgAyQ6pUcTHiIyA6BQfC93d64ZS0EE5wC45DqvXiu0mtVZZ2ZyQTHOf8AyrhZ32a7qAfUE1sM0mTmTH4hGWfPJXTs6I+7ZjlDmEO/LGvHF4fZrOLK0zVqmahGgaNhyJy25rOmg5BOL0t769V9Z5lzzJ+gHpCn+A+HjarQ1seEGXHoE1MHBb8vkZ44XCNd7KrvdSsbS7V+forovGy2dtNjWN0aAB6L2WgQEiESpAVCEIAEIQgCKalckauigDkLtq4auwgDpVjjdtRlMV6Xt0zPmNweis4Kb2+ziowtO4SyipLDJTxuZTa6dO1sdVpCSR/iUtwRGg5bz0VKt11PZ7PiHQGR6KZv+wVrHXLqbnMzycMvReNLiEkg1mB2kub4XGOnsz6LPCMq9uULKG/VDb6DGzO8GUzpHqpC67UQ8CU2NoYXFzCc9iMwucLmwc4nL0TNZNEJNYZeaFthubo8ypOxWxsTKod7Ws9218nbT4rwoXvM92SCCAJ093mqPIyjS9Thl9r2yKjsD2jTE0/MZ/BetG8alMy5oNOfbaZb67tWdV7S9xa4+7cmc8/cveje9akCQ4wR4mnMET19VPkAtSbFa77Y5knCAG65e+Vnde/pJcxkgnwlzsIOe2UlRVW1942I2kiTGWemh8lFWimNcUZiQU0as7sSV6SxEt3fYGiXDEcydpOcD5KNvi8NIPtbKErWt7sLZ9qDJ0mAF41arpzM4cvVNGpJ5Ele5LAjbb3NbvmgOqfhnRsjXqVHW211K1Q1Kji5zjmT/eQSveJ0UtcPDz7TUDWDLdP0rOe5RnbAyuu6H1nhrRM9Fv3A/DLbHS0GN2p+i44T4PpWVoJAL415K1K1IVsRCVCYgQpAlhEIAEJUBAAhLCEARQSlCEAIAlQhBAJZSIQSQXE1wstDCCM1jV93FUoPILSRORW73te1CzU+8rvDW6Aalx5Nbq4+Sol+ca2J+TKFWqTzAY3ykyoayGcGbXeyXQdx9QndSi/FBmNv5T2rag92IWZlIc8Rc75AJ3eTfCHAQ4DXpyVE/TI0VpSiRrnAscyPJSN0XRSLAHgguzkHfoPJQVC0Eu1Bz+unVWC7XS3FMDY85Og/vZRNYWxNbTludWnhaqDipuDtuR9Fw/h61A+KkXD88A/JTdlvfDrmPflzUjZeLaYbEOPlsSljORfKFXJXKlz1TLWMdgiYwwZiNSeaiqvD9VoGKGmBOcwri/iim479c1C3heocYGmpU9UiJQqxsQ9WwtpsEmZy9Y29AogvyPUz9An962qSQPw9fioq01Bia3fDPLIq2OcGWbWdjxoMxPA9F9Bdn1zMo2dro8TgDKwWw0oqNJOU6r6Q4Zr03Wenge10NE4SDtumSK2yWQhCcgEIQgAQhIgBUBCUIAEJUIAikIQggEIQgATO9bxZQpmo85DQczyXN83pTs1J1WoYa0epOwCw3ivi+ra3HOGTk0aAIAccS3x9oca9R8vM4G7NEwICrjj3UHGJgHXfWCvWzWV1V9KmBm7C0ebj/VfRd0cAWGzMAZZ2OeAMT6g7xxjXM76xshvAJGUXNdhbZPtFUAl7TgAOmLSfn6roU8VMjeFO8WWsd0KYbTgOyLfaEE5OCjLEzJY7pbm7TR2KFeTMFWAFM3bbIaAcjnHy/lOOJ7pJh7RMDP0zVcs9TCYJkfJWRanEqmnXItbQ0t0OuWeZMZA7ADVRr7K4yTPgABjITnAncrystsMTiyM6n+F023yACCczDdp2PmpUWglNSRzZXHxZRA3zmcj9fgvUVG+LxZ6NOmsa9E0qWgtIyGfu0j+Sue7gxqBImeugO+oTYK1LB4WwYXEHfI7zG6sHC/DtltTgLQ8sJhrS1wBbOjsJyInmq/GN4GeXPnuVb+FWDvHNJa3FTLTi8xp1UdWHglRzHJ53/wBmtosznOs7/tDWe01vhrM6up7t6jJRXDvEVWzVBLnAA5jcc8ua1bi29O5slit7RFRlRrJmcVMhwe0/mBAnzVe7TrnpVBSrtEFxcMQyJBAc0nnlKWVzjZGHuKoJpslbn7Sabjhqgxs7fzIV5sNvp1W46bg4cx9V81uplhg7ZT01HzVhuPiJ1mOJjyOmo9QtOCvJvqFULj44oVGjvDhd0zH9FZKF40n+zUafgoJHaEjXA6FKgAQhCACUqRCAIxCQLztFdrBie4Adf7zQQeqZXnelGzsL6rw0AT19Aq9e/FcS2iI/UYn0Gyy/i2+HPdgLiYzdnvsPqjAZPbj3iw2yqA2RSZOFvM/mPVVBxXS5DVIF+7MqDXW6gXCQ0YgOrWEhfRJ8TTB1BzHULBOzGzOLqldmZoUQ7D+YE4XN88IcR1AWyXLebXNa4GWPALTynmsFt7quxL5X3+pco5jtyZpft2MwDunNeWSagbmQJIl5GhBIB9EysdNX+z4WWl1NwBxY2OpmBLXnEADzO3mouvw0HYn2Vxe1ph1M5Vabvyuaf7801sG90aKbIx2ZXHUQ7Iqr8S8PYGd7TG4kRpG6uVWiWmCII1ByI9F0KYeMLhIOoVEZuLNM4KaMeqy0xJ12+i9hXkgflMTMevuV6vXhBrhNKAfynT05FVi0cPVWuzpE7ZH6rXG2LMMqJIY1LbIDQ0YZJDszBknwpqHOjM5DbqclL07krEZU45Tt1UlZOGsJDqhxHlsiVsUEaZMbXHYThLiIJ/sK1XDdD3NqVg2S19NgJbijFJLo3IgZfqUlw3wnVtBkDDT3edOob+Y/BXy8bJSstmZSp4W+MYS4jN0Eue6dcvolgm31MeyUUulGS8X3u+pRs9iMl1Oo9xn9RimAPV2XkrbxxQw2Wi06tc1p9KcH5JvcXDL7Vef2iphNGiGkkZBzhJY33+I9I5p/2iO/wmdapPwP8qi7/XqX1K18sjLb1s34wPP+VDVCQQQr3dFl72p3cTip1B7qbj8wFRX9V1ZrczDmx254cMxAM8pG8qyNtdQCaVQg64Z+XNVJ4ww46bKWsFYPEaEacoOiVEFisnFVcNJBIcNRO6k7g7Q6hJa8kkczKqNVhnk8aHQHof5UY+uGVg/ScnjcHqOSnAZN1u3jGjUAxQJ02Vhs9pY8S1wPkvn28gRTDmOgtIIcDkZU1dHE9ag6nWaSW/jbzG4UOJKZtyFVP/UGx/r939UKME5Q0vPiVrQRSz/WdP8ApG6pl53s95MuJ6k5qPttvJyGiZComSFydWu14WlxOg955KoWnETLtTmeealr5rklrGyY8RjnoFGhrQYLpP4nbA/VQyRuyi45AE+ScUrM7XA73L2Jc3xMqjLlqvZt4VSJy81AGsdhVmytDj+Wm0jzxGF6/bXXfbKtB0mi5+ID8ocZDh6GCOi57E60urgHJ1Om4j9QLhKle1e7/urQBzY75tJ/+SqsqjanCXDHUmt0ObSxved4HBwdhqa5HCABDvIKxXvcLLRhrNe+jXDRgr0zDgPyuGj29Cslua8Kksoe0zESGkwASM8+WuXValwzbsNMUn5FmWZmBtnyVEV8PBRm/wAljfXuiBvStbqOVssjLZRGlegMFUDm5s/KAoaleV11D4LU+i78lZjoHTEBA9VrIUNe/CtitOdWzsLvzgYX/wC4Zn1VzhGREbJR4ZVKFzd591abPU/a8SnLeELQdSzzmfomF4dkdInFZ7S+nyDmh4/3AgqKf2a3mz7u2AjpVqs+EqvyIFnxMy00eBnfjqgftBJ+Kf0eH7DZ/FUc0kZzVe2P9uQVBd2c3s72rQD516hXtQ7JLS8jvrVTaN4Dqh+JCdVxXCFldOXLLFxH2l2SzjBQivUAyDMqbeUu38mqpXJeFutdZ9rrZMLcLCWwzIzgpg7ZZnfJXa4uzSw2chz2mu4b1ILZH6Bl75T7jD7ttENbhIJggBvh0A/hO+CtcjjhstbYmubuC45YfETByVC7QK0vpU59lrnHzcQB8leWVDTs1Jj3zhpgvdGHadNoCye+Lca9Z9TmfCOTRk0e5Yql52ryuIL+7Hk+mH3JXs6s2O3MnRrHk+UYf/0s2viymnVewiC1zmnzaSD8ltXZVd+dW0EbCmw+uJ3yaFRe0u6sNvrAZB2GoBtLxJ+MrpyeZFGNijUbVAwuGJvLl5J1iaG4qbvZzDfoQmlqsjmHMGOaSz0ssQgxq08lBBYi4Gm2pqw6ndv9ExvKxmoMvbaMv1N/nkvW5X4WuYc2uMxyO7fdmF1QDmudSJ8TDipnmzl6JiBndVrplvdOykQWn2T1b+Ur3sgNNxoOMh2bHc4+qacQWCIrNGTvaHI814vNQMDg7E0ZidR5FAEpgdySLw/4tU/KPehGScEpVZ4QvBrhMDURPqnIdLAosnDVqPOmARyQBFW55DnxucM7wE2c0AaZ9fmnDqwYMUAuJJznKd4TIvc4ycyUoHuyE7s9IkZDoOpTJsjIiE+oQQPOB67qCTQuxm14LaKZOT2VGeZaQ8R8Vs18XZTtFJ1KoPC7cagjRw6gr5qut5ovpvY6H03h46D+wvozhe+22uztqjJ2jxydA+B1UP3GRkXEVw17FVh3szNOq3Q7+juimrBetShT7wQ9owl+ImTpoeeYWpW6xU6zDTqsDmu1B+Y5HqqTbuH6Vla7vZq0T7JcB4eTTG/VJbGNkemQ0X08ErcHETKrZpukD2mHJzfT66KyULQ14yPpusEbUdSqFzC5paThO8Tl8IVxuTjMZNr+E/6jZj/qG3mFhdN2m3h6o+3dD9UZ87M09CjLDejXAEkEHR4zBUkCtNN8LV6f4FlFrkVCRBVwoqqPGdZuINM5MBnOGS6A4+atj3AAk6BUHjGo17nEuwkAazDhrn5QqpzWejO7Hiu5Hcb3yY+zNdLiAarvk31iT0hU+x2Z1R7abBLnODWjqTAQ9xcZJknMnz1Widm/D5aPtVRuoiiDy3f66DpKuoojp68LkrnJzZbrku1tmoMojRg8R5uObj75Xz1xPexrWh9d5P8AiOJaeTZIa3plC3rjG+fslkqVwJcBhYD+Z2Q84zPovni01qbgJmYEA6HXMpo+5DOWWxsEgz0/8poy2BskgCdIHzXpbqDWgudkRsMp6KPstHvTnA8lIpIWK1tLpwkTvoJ3kqQtbC4sdiAqMPhdsQdiottmNN4IdiYCCR8CD6KUq/4ZyzadN9eSZEDu1Qabg8RI019yrlnBDH0z+H5bFTIqiZ1HXZRVsIbUDtjLT8x9UMCO7sfnCF19kHNCUYtFj+79SmFr1Pl/KEJhSDt/3qd2P7z0QhKSeN5e0UWX2mef0QhBI7s3tP8ARbd2O/cVv3M/7EqFD4JRoIVc46/y7f8Ams+aVCrY6MivH7x/mm5/hCFoj8oj5NA4C/y7v3n5BX27vYCVC4Gj/qpmmz5UOEFCF2CgbXj92VnvG2noPmhC58v61fYuXyMptXfyW53T9xS/5TP+0IQutbwZ4lJ7Zv8AK0v+af8A63LC7x0Z+0fMoQkiEhzffsn9wTCyeyhCZihadXeSslp+5p/sb8ghClANrLo/9qj7z0H7x9UiEPgg4QhCUk//2Q==" alt="Avatar"/>{props.name}</NavLink>
		</div>
	);
};

export default DialogItem;