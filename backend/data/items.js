
const items= [
    // basic supplies
    {
        name: 'Hb pencil set',
        image: '/images/pencilset.jpg',
        description: 'Hb pencil set for everyday use. Consists of 10 pencils.',
        qtyInStock: 40,
        category: 'Basic Supplies',
        price: 50.0
    },
    {
        name: 'Check Pencil Box',
        image: '/images/basic/checkeredpencilbox.jfif',
        description: 'High Quality checkered zip pencil box.',
        qtyInStock: 12,
        category: 'Basic Supplies',
        price: 20.0
    },
    {
        name: 'Black Pen',
        image: '/images/basic/blackpen.png',
        description: 'Black inked penfor everyday use.',
        qtyInStock: 11,
        category: 'Basic Supplies',
        price: 10.0
    },
    {
        name: 'Black Clear Pencil Box',
        image: '/images/basic/clearcaseblack.jfif',
        description: 'High Quality black clear zip pencil box.',
        qtyInStock: 12,
        category: 'Basic Supplies',
        price: 10.0
    },
    {
        name: 'White Clear Pencil Box',
        image: '/images/basic/clearcasewhite.jfif',
        description: 'High Quality white clear zip pencil box.',
        qtyInStock: 12,
        category: 'Basic Supplies',
        price: 10.0
    },
    {
        name: 'Colored Pen Set',
        image: '/images/basic/coloredpenset.jfif',
        description: 'Set of colored Pens.',
        qtyInStock: 16,
        category: 'Basic Supplies',
        price: 30.0
    },
    {
        name: 'Decor Pens',
        image: '/images/basic/decorpens.jfif',
        description: 'High Quality decor pen set',
        qtyInStock: 12,
        category: 'Basic Supplies',
        price: 50.0
    },
    {
        name: 'Faber Castle Eraser',
        image: '/images/basic/faberCastleEraser.jfif',
        description: 'original Faber castle eraser.',
        qtyInStock: 120,
        category: 'Basic Supplies',
        price: 5.0
    },
    {
        name: 'Pencil Box',
        image: '/images/basic/graypencilbox.jfif',
        description: 'High Quality gray zip pencil box.',
        qtyInStock: 12,
        category: 'Basic Supplies',
        price: 10.0
    },
    {
        name: 'Pearl Pink Eraser',
        image: '/images/basic/pinkEraser.jfif',
        description: 'Set of 2 pink erasers by pearl.',
        qtyInStock: 12,
        category: 'Basic Supplies',
        price: 5.0
    },
    {
        name: 'Pink Pencil Box',
        image: '/images/basic/pinkPencilbox.jfif',
        description: 'High Quality Pink zip pencil box.',
        qtyInStock: 12,
        category: 'Basic Supplies',
        price: 15.0
    },
    // paper products
    {
        name: 'Journal',
        image: '/images/ringJournal.jpg',
        description: 'Ring-binded notebook for journaling or making everyday notes.',
        qtyInStock: 10,
        category: 'Paper Products',
        price: 100.0
    },
    {
        name: 'Anchor leather notebook',
        image: '/images/paper/annotebook.jfif',
        description: 'Anchor leather notebook for journaling or making everyday notes.',
        qtyInStock: 20,
        category: 'Paper Products',
        price: 150.0
    },
    {
        name: 'Black Register',
        image: '/images/paper/blackRegister.jfif',
        description: 'Black Register for students for making everyday notes.',
        qtyInStock: 20,
        category: 'Paper Products',
        price: 80.0
    },
    {
        name: 'Brown Notebook',
        image: '/images/paper/brownNotebook.jfif',
        description: 'Brown khaki notebook for students for making everyday notes.',
        qtyInStock: 20,
        category: 'Paper Products',
        price: 90.0
    },
    {
        name: 'Daily Planner Pages',
        image: '/images/paper/dailyplanner.jfif',
        description: 'Daily planner to plan any day. Set of 30 pages',
        qtyInStock: 20,
        category: 'Paper Products',
        price: 100.0
    },
    {
        name: 'Weekly Planner Pages',
        image: '/images/paper/weeklyplanner.jfif',
        description: 'Weekly planner to plan any week. Set of 10 pages',
        qtyInStock: 20,
        category: 'Paper Products',
        price: 100.0
    },
    {
        name: 'Ring Notebook',
        image: '/images/paper/ringNotebook.jfif',
        description: 'Ring binded notebook for jouranling.',
        qtyInStock: 20,
        category: 'Paper Products',
        price: 110.0
    },
    {
        name: 'Sticky Notes 0.1',
        image: '/images/paper/stickynotesLine.jfif',
        description: 'Single Sticky notes set',
        qtyInStock: 20,
        category: 'Paper Products',
        price: 100.0
    },
    {
        name: 'Sticky Notes 0.2',
        image: '/images/paper/stickynotesSquare.jfif',
        description: 'Squared Sticky notes set',
        qtyInStock: 20,
        category: 'Paper Products',
        price: 100.0
    },
    //office supplies
    {
        name: 'Stapler',
        image: '/images/stapler.jpg',
        description: 'High quality stainless steel stapler',
        qtyInStock: 30,
        category: 'Office Supplies',
        price: 70.0
    },
    {
        name: 'Scissor',
        image: '/images/desk/scissor.jfif',
        description: 'High quality stainless steel scissor',
        qtyInStock: 30,
        category: 'Office Supplies',
        price: 60.0
    },
    {
        name: 'Brush Pen Set',
        image: '/images/desk/brushpenset.jfif',
        description: 'High quality Brush Pens.',
        qtyInStock: 30,
        category: 'Office Supplies',
        price: 100.0
    },
    {
        name: 'Highlighter Set',
        image: '/images/desk/highlighterset.jfif',
        description: 'A set of highlighters.',
        qtyInStock: 30,
        category: 'Office Supplies',
        price: 80.0
    },
    {
        name: 'Desk Organizer',
        image: '/images/desk/organizer.jfif',
        description: 'Desk Organzier to sort notes and pens.',
        qtyInStock: 30,
        category: 'Office Supplies',
        price: 50.0
    },
    {
        name: 'Thumbtacks',
        image: '/images/desk/thumbtacks.jfif',
        description: 'Thumbtack set for desk notes and reminders.',
        qtyInStock: 30,
        category: 'Office Supplies',
        price: 60.0
    },
    {
        name: 'Desk Notes',
        image: '/images/desk/yellowdesknotes.jfif',
        description: 'Yellow Colored Set of Desk Notes.',
        qtyInStock: 30,
        category: 'Office Supplies',
        price: 40.0
    },
    //paint and draw
    {
        name: 'Paint Brush Set',
        image: '/images/paintBrushSet.jpg',
        description: 'Soft bristles paint brush set. Consists of 4 kinds of brushes vital for painting.',
        qtyInStock: 50,
        category: 'Painting & Drawing',
        price: 110.0
    },
    {
        name: 'Acrylic Paints',
        image: '/images/paint/acrylics.jfif',
        description: 'Acrylic Paint set.',
        qtyInStock: 50,
        category: 'Painting & Drawing',
        price: 200.0
    },
    {
        name: 'Oil Paints',
        image: '/images/paint/oilpaints.jfif',
        description: 'Oil Paint set.',
        qtyInStock: 50,
        category: 'Painting & Drawing',
        price: 190.0
    },
    {
        name: 'Crayola Crayons',
        image: '/images/paint/crayolacrayons.jfif',
        description: 'Crayon Set by Crayola',
        qtyInStock: 10,
        category: 'Painting & Drawing',
        price: 160.0
    },
    {
        name: 'Palette Knives',
        image: '/images/paint/paletteknives.jfif',
        description: 'Set of all types of Palette knives for painting with acrylics.',
        qtyInStock: 10,
        category: 'Painting & Drawing',
        price: 130.0
    },
    {
        name: 'Wooden Palette',
        image: '/images/paint/woodenpalette.jfif',
        description: 'Wooden Pallete for Painting',
        qtyInStock: 10,
        category: 'Painting & Drawing',
        price: 120.0
    },
    {
        name: 'Water Colors Set',
        image: '/images/paint/watercolors.jfif',
        description: 'Water Colors Set',
        qtyInStock: 10,
        category: 'Painting & Drawing',
        price: 170.0
    }

]

export default items