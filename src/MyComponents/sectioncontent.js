import React from 'react';
import './sectioncontent.css'

const SectionContent = (props) => {
  let x,y=props.value;
  if(y===0)
  {
    x=<h1>Here, you will see the description of the algorithm</h1>
  }
  if(y===1)
  {
    x=<div>
        <h1>MD5 Hashing Description</h1>
        <p>Here, you will see the description of the MD5 hashing algorithm.</p>
      </div>
  }
  if(y===2){
    x=<div>
        <h1>SHA-1 conversion algorithm</h1>
        <p>This is the description of the SHA-1 conversion algorithm</p>
      </div>
  }
  if(y===3)
  {
    x=<div>
        <h1>SHA-224 conversion algorithm</h1>
        <p>This is the description of the SHA-224 conversion algorithm</p>
      </div>
  }
  if(y==4)
  {
    x=<div>
        <h1>SHA-256 conversion algorithm</h1>
        <p>This is the description of the SHA-256 conversion algorithm</p>
      </div>
  }
  if(y===5)
  {
    x=<div>
        <h1>Base64 conversion algorithm</h1>
        <p>This is the description of the Base64 conversion algorithm</p>
      </div>
  }
  if(y===6)
  {
    x=<div>
        <h1>Binary Conversion</h1>
        <p>This is the description of the Binary conversion algorithm</p>
      </div>
  }
  if(y===7)
  {
    x=<div>
        <h1>URL conversion algorithm</h1>
        <p>This is the description of the URL conversion algorithm</p>
      </div>
  }
  if(y===8)
  {
    x=<div>
        <h1>Hexadecimal Conversion algorithm</h1>
        <p>This is the description of the Hexadecimal Conversion conversion algorithm</p>
          </div>
  }
  if(y===9)
  {
    x=<div>
        <h1>ROT Conversion algorithm</h1>
        <p>This is the description of the ROT Conversion conversion algorithm</p>
      </div>
  }
  return (
    <div>
      {x}
    </div>
  );
};

export default SectionContent;
