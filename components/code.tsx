import React from 'react'
import CodeBlocks from './codeblock'


export const Code = () => {
  return (
    <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your 
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>
  )
}
